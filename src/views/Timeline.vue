<template>
  <div class="home">
    <div class="labeled-control-wrapper">
      <label for="taskSelector">Выберите задачу</label>
      <Select
        :options="options"
        @input="onTaskSelected"
      />
    </div>
    <div class="timeline">
      <div class="lines">
        <div
          v-for="element in timeline.elements"
          :key="element.title + '_line'"
          :class="TimelineEventType[element.type].toString().toLowerCase()"
        >
          <div
            class="dot"
          />
          <div class="line" />
        </div>
      </div>
      <ul class="cards">
        <li
          v-for="element in timeline.elements"
          :key="element.title"
          class="card"
        >
          <p class="date">
            {{ dateFormat(element.deadline) }}
          </p>
          <p class="time">
            {{ element.deadtime }}
          </p>
          <p class="title">
            <b>{{ element.title }}</b>
          </p>
          <p class="description">
            {{ element.description }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import Select from "@/components/reusable/Select.vue";
import { Options, Vue } from "vue-class-component";

import { Timeline, TimelineEventType, TimelineEventTag } from "@/models/Timeline";
import { dateFormat } from "@/filters/dateFilters";

@Options({
  components: {
    Select
  }
})
export default class Home extends Vue {
  public timeline: Timeline = {
    elements: []
  };

  public options: string[] = [
    "сложная задача",
    "выбери меня",
    "pick me tiktok",
    "печка"
  ];

  public readonly TimelineEventType = TimelineEventType;

  public dateFormat = dateFormat;

  public onTaskSelected(value: String) {
    console.log(value);
  }

  created() {
    for (let i = 0; i < 3; i++) {
      this.timeline.elements.push({
        title: "Что-то что я уже сделал",
        description: "Вот же блин какой я молодец такое сложное задание выполнил в срок!",
        deadline: new Date(),
        deadtime: "17:00",
        type: TimelineEventType.Done,
        tags: []
      });
    }

    for (let i = 0; i < 2; i++) {
      this.timeline.elements.push({
        title: "щас это делаю",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        deadline: new Date(),
        deadtime: "12:50",
        type: TimelineEventType.InProgress,
        tags: []
      });
    }

    for (let i = 0; i < 5; i++) {
      this.timeline.elements.push({
        title: "ептвою мать щас сгорит жопа",
        description: "бляя не лезь туда дебил сука ебаный она тебя сожрет я те сказали... бляяяять",
        deadline: new Date(),
        deadtime: "09:30",
        type: TimelineEventType.Urgent,
        tags: [TimelineEventTag.New]
      });
    }
  }
}
</script>
<style lang="scss" scoped>
.timeline {
  text-align: left;
  display: flex;
  width: 100%;
  height: calc(100vh - #{ceil(($bottom-app-height*2+$top-app-height+$vertical-spacing*2)/110)*110});
  overflow-x: hidden;
  overflow-y: auto;
  .cards {
    margin-left: 1rem;
    .card {
      height: 150px;

      .date {
        font-weight: bold;
        font-size: 1.1rem;
      }
      .time {

      }
      .title {

      }
      .description {

      }
    }
  }
  .lines {
    div .line {
      background-color: $lightgray;
      margin-left: 14px;
      width: 2px;
      height: 120px;
    }
    div .dot{
      width:30px;
      height:30px;
      border: 2px solid $lightgray;
      background-color: transparent;
      border-radius:50%;
    }
    .done .line {
      background: $green;
    }
    .done .dot {
      border-color: $green;
    }
    .urgent .line {
      background: $red;
    }
    .urgent .dot {
      border-color: $red;
    }
    .inprogress .line {
      background: $orange;
    }
    .inprogress .dot {
      border-color: $orange;
    }
  }
}
</style>
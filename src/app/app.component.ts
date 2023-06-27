import { Component } from "@angular/core";
import { SeriesLabels } from "@progress/kendo-angular-charts";

@Component({
  selector: "my-app",
  template: `
    <kendo-chart>
      <kendo-chart-legend position="bottom" orientation="horizontal">
      </kendo-chart-legend>
      <kendo-chart-category-axis>
        <kendo-chart-category-axis-item [categories]="categories">
        </kendo-chart-category-axis-item>
      </kendo-chart-category-axis>

      <kendo-chart-series>
        <kendo-chart-series-item
          name="2022"
          type="line"
          [data]="[152, 246, 211, 320, 158, 51, 186, 105, 51, 245, 89, 139]"
          color="#ffbc63"
          [labels]="seriesLabels2022"
        >
        </kendo-chart-series-item>
        <kendo-chart-series-item
          name="2023"
          type="line"
          [data]="[198, 398, 51, 245, 89, 25, 152]"
          color="#b7cff7"
          [labels]="seriesLabels2023"
        >
        </kendo-chart-series-item>
      </kendo-chart-series>
    </kendo-chart>
  `
})
export class AppComponent {
  public categories: string[] = [
    "Jan ",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  public seriesLabels2022: SeriesLabels = {
    visible: true, // Note that visible defaults to false
    //padding: 3,
    //font: "bold 16px Arial, sans-serif",
    color: "#ffbc63"
  };

  public seriesLabels2023: SeriesLabels = {
    visible: true, // Note that visible defaults to false
    //padding: 3,
    //font: "bold 16px Arial, sans-serif",
    color: "blue"
  };
}

import { AfterViewInit, Component, OnDestroy, Input } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-echarts-bar',
  template: `
    <div echarts [options]="options" class="echart" (chartPieSelected)="chartPieSelected($event)"></div>
  `,
})
export class EchartsBarComponent implements AfterViewInit, OnDestroy {
  @Input() data: any={};
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: ['#F34172'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            data: ['age 25-35', 'age 35-45', 'age 45-50', 'age >50'],
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            splitLine: {
              lineStyle: {
                color: echarts.splitLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        series: [
          {
            name: 'Count',
            type: 'bar',
            barWidth: '60%',
            data: [4, 6, 3, 2],
          },
        ],
      };
    });

    this.options.xAxis[0].data = this.data.label;
    this.options.series[0].data = this.data.data;
    this.options.color = [this.data.color];
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  chartPieSelected($event){
    console.log("Pie event--->", $event);

  }
}

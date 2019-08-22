import React,{Component} from 'react';
import G2 from '@antv/g2'

export default class Charts extends Component{
    
    constructor(props){
        super(props);
        this.list = [{
            year: '1991',
            value: 3
        }, {
            year: '1992',
            value: 4
        }, {
            year: '1993',
            value: 3.5
        }, {
            year: '1994',
            value: 5
        }, {
            year: '1995',
            value: 4.9
        }, {
            year: '1996',
            value: 6
        }, {
            year: '1997',
            value: 7
        }, {
            year: '1998',
            value: 9
        }, {
            year: '1999',
            value: 13
        }];
        this.data = [{
            item: '事例一',
            count: 40,
            percent: 0.4
          }, {
            item: '事例二',
            count: 21,
            percent: 0.21
          }, {
            item: '事例三',
            count: 17,
            percent: 0.17
          }, {
            item: '事例四',
            count: 13,
            percent: 0.13
          }, {
            item: '事例五',
            count: 9,
            percent: 0.09
          }];
    }
    componentDidMount(){
        var chart = new G2.Chart({
            container: 'mountNode',
            forceFit: true,
            height: 300
          });
          chart.source(this.list);
          chart.scale('value', {
            min: 2
          });
          chart.scale('year', {
            range: [0, 1]
          });
          chart.tooltip({
            crosshairs: {
              type: 'line'
            }
          });
          chart.line().position('year*value');
          chart.point().position('year*value').size(4).shape('circle').style({
            stroke: '#fff',
            lineWidth: 1
          });
          chart.render()



          var charts = new G2.Chart({
            container: 'two',
            //forceFit: true,
            height: 300,
            width:500
          });
          charts.source(this.data, {
            percent: {
              formatter: function formatter(val) {
                val = val * 100 + '%';
                return val;
              }
            }
          });
          charts.coord('theta');
          charts.tooltip({
            showTitle: false
          });
          charts.intervalStack().position('percent').color('item').label('percent', {
            offset: -40,
            // autoRotate: false,
            textStyle: {
              textAlign: 'center',
              shadowBlur: 2,
              shadowColor: 'rgba(0, 0, 0, .45)'
            }
          }).tooltip('item*percent', function(item, percent) {
            percent = percent * 100 + '%';
            return {
              name: item,
              value: percent
            };
          }).style({
            lineWidth: 1,
            stroke: '#fff'
          });
          charts.render();
    }
    render(){
        return(
            <div style={{display:'flex'}}>
                <div id="mountNode" style={{width:'500px'}}></div>
                <div id="two" ></div>
            </div>
        )
    }
}
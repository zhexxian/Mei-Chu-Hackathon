window.onload = function () {
	var config1 = liquidFillGaugeDefaultSettings();
    config1.circleColor = "#6DA398";
    config1.textColor = "#0E5144";
    config1.waveTextColor = "#6DA398";
    config1.waveColor = "#246D5F";
    config1.circleThickness = 0.2;
    config1.waveAnimateTime = 1000;
    config1.textVertPosition = 0.5;
    config1.displayPercent = false;
    var gauge1 = loadLiquidFillGauge("fillgauge1", 36, config1);

    var config2 = liquidFillGaugeDefaultSettings();
    config2.circleColor = "#FF7777";
    config2.textColor = "#FF4444";
    config2.waveTextColor = "#FFAAAA";
    config2.waveColor = "#FFDDDD";
    config2.circleThickness = 0.2;
    config2.textVertPosition = 0.5;
    config2.waveAnimateTime = 1000;
    config2.displayPercent = false;
    var gauge2 = loadLiquidFillGauge("fillgauge2", 78, config2);

    var config3 = liquidFillGaugeDefaultSettings();
    config3.circleColor = "#808015";
    config3.textColor = "#555500";
    config3.waveTextColor = "#FFFFAA";
    config3.waveColor = "#AAAA39";
    config3.circleThickness = 0.2;
    config3.textVertPosition = 0.5;
    config3.displayPercent = false;
    config3.waveAnimate = false;
    config3.waveRise = false;
    config3.waveHeightScaling = false;
    config3.minValue = 0;
    config3.maxValue = 28;
    var gauge3 = loadLiquidFillGauge("fillgauge3", 9125, config3);

    var config4 = liquidFillGaugeDefaultSettings();
    config4.circleColor = "#D4AB6A";
    config4.textColor = "#553300";
    config4.waveTextColor = "#805615";
    config4.waveColor = "#AA7D39";
    config4.circleThickness = 0.2;
    config4.textVertPosition = 0.5;
    config4.displayPercent = false;
    config4.waveAnimate = false;
    config4.waveRise = false;
    config4.waveHeightScaling = false;
    config4.minValue = 0;
    config4.maxValue = 28;
    var gauge4 = loadLiquidFillGauge("fillgauge4", 28046, config4);

	var columnChart = new CanvasJS.Chart("columnChart", {
		title: {
			text: "Image Upload by Date"
		},
		data: [{
			type: "stackedColumn",
			name: "Returning users",
			showInLegend: true,
			dataPoints: [
			{ label: "Jan", y: 2500 },
			{ label: "Feb", y: 4240 },
			{ label: "Mar", y: 5500 },
			{ label: "Apr", y: 5600 },
			{ label: "May", y: 7300 },
			{ label: "Jun", y: 8000 },
			{ label: "Jul", y: 9800 },
			{ label: "Aug", y: 10800 },
			{ label: "Sep", y: 14100 },
			{ label: "Oct", y: 15000 }
			]
		}, {
			type: "stackedColumn",
			name: "New users",
			showInLegend: true,
			dataPoints: [
			{ label: "Jan", y: 1500 },
			{ label: "Feb", y: 2140 },
			{ label: "Mar", y: 3190 },
			{ label: "Apr", y: 9670 },
			{ label: "May", y: 6780 },
			{ label: "Jun", y: 8780 },
			{ label: "Jul", y: 7870 },
			{ label: "Aug", y: 7800 },
			{ label: "Sep", y: 8030 },
			{ label: "Oct", y: 13300 }
			]
		}]
	});
	columnChart.render();
	var pieChart = new CanvasJS.Chart("pieChart",
	{
		title: {
			text: "Image Upload by Location"
		},
		animationEnabled: true,
		animationDuration: 2000,
		legend: {
			verticalAlign: "bottom",
			horizontalAlign: "center"
		},
		data: [
		{
			indexLabelFontSize: 20,
			indexLabelFontFamily: "Monospace",
			indexLabelFontColor: "darkgrey",
			indexLabelLineColor: "darkgrey",
			indexLabelPlacement: "outside",
			type: "pie",
			toolTipContent: "{y} - <strong>#percent%</strong>",
			dataPoints: [
				{ y: 4181563, legendText: "#", indexLabel: "小木屋" },
				{ y: 2175498, legendText: "#", indexLabel: "第二餐廳" },
				{ y: 3125844, legendText: "#", exploded: true, indexLabel: "中正堂" },
				{ y: 1176121, legendText: "#", indexLabel: "清交小徑" },
				{ y: 1727161, legendText: "#", indexLabel: "浩然圖書館" },
				{ y: 4303364, legendText: "#", indexLabel: "田徑場" },
				{ y: 1717786, legendText: "#", indexLabel: "學生活動中心" }
			]
		}
		]
	});
	pieChart.render();
}
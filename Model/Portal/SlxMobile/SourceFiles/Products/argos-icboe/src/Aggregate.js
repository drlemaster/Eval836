/*
 * Copyright (c) 1997-2013, SalesLogix, NA., LLC. All rights reserved.
 */

/**
 * @class icboe.Aggregate
 *
 * Aggregate functions. Currently used in metric widgets.
 *
 */
import lang from 'dojo/_base/lang';

const __class = lang.setObject('icboe.Aggregate', {
  /**
   * Calculate Profit
   * @param {Array} data arrays of revenue and cost
   * @return {Number}
   */
  calcProfit: function calcProfit(revenue = 0, cost = 0) {
    const totalRevenue = crm.Aggregate.sum(revenue);
    const totalCost = crm.Aggregate.sum(cost);
    const profit = totalRevenue - totalCost;

    return profit;
  },
  /**
   * Calculate Margin
   * @param {Array} data arrays of revenue and cost
   * @return {Number}
   */
  calcMargin: function calcMargin(revenue = 0, cost = 0) {
    const profitTotal = icboe.Aggregate.calcProfit(revenue, cost);
    const revenueTotal = crm.Aggregate.sum(revenue);
    let margin;
    if (revenueTotal !== 0 ) {
      margin = profitTotal / revenueTotal;
    } else {
      margin = 0;
    }

    return margin;
  },
  /**
   * Calculate YoY Revenue
   * @param {Array} data array of revenue in the past year and revenue between a set of years
   * @return {Number}
   */
  calcYoYRevenue: function calcYoYRevenue(pastYear, between) {
    const revenuePastYear = crm.Aggregate.sum(pastYear);
    const revenueBetween = crm.Aggregate.sum(between);
    let revenueYoY;

    if (revenueBetween !== 0) {
      revenueYoY = (revenuePastYear - revenueBetween) / revenueBetween;
    } else {
      revenueYoY = 0;
    }

    icboe.Aggregate.changeColor(this, revenueYoY);

    return revenueYoY;
  },
  /**
   * Calculate YoY Profit
   * @param {Array} data arrays of revenue in the past year, cost in the past year, revenue between two years, and cost between two years
   * @return {Number}
   */
  calcYoYProfit: function calcYoYProfit(revenuePastYear, costPastYear, revenueBetween, costBetween) {
    const profitPastYear = icboe.Aggregate.calcProfit(revenuePastYear, costPastYear);
    const profitBetween = icboe.Aggregate.calcProfit(revenueBetween, costBetween);
    let profitYoY;

    if (profitBetween !== 0) {
      profitYoY = (profitPastYear - profitBetween) / profitBetween;
    } else {
      profitYoY = 0;
    }

    icboe.Aggregate.changeColor(this, profitYoY);

    return profitYoY;
  },
  /**
   * Calculate YoY Margin
   * @param {Array} data arrays of revenue in the past year, cost in the past year, revenue between two years, and cost between two years
   * @return {Number}
   */
  calcYoYMargin: function calcYoYMargin(revenuePastYear, costPastYear, revenueBetween, costBetween) {
    const marginPastYear = icboe.Aggregate.calcMargin(revenuePastYear, costPastYear);
    const marginBetween = icboe.Aggregate.calcMargin(revenueBetween, costBetween);
    let marginYoY;

    if (marginBetween !== 0) {
      marginYoY = (marginPastYear - marginBetween) / marginBetween;
    } else {
      marginYoY = 0;
    }

    icboe.Aggregate.changeColor(this, marginYoY);

    return marginYoY;
  },
  changeColor: function changeColor(widget, value) {
    let temp = value;
    temp = temp * 100;

    if (temp > 0.01) {
      if (temp > 5) {
        if (temp > 10) {
          widget.domNode.parentElement.style['background-color'] = '#76b051';
        } else {
          widget.domNode.parentElement.style['background-color'] = '#56932e';
        }
      } else {
        widget.domNode.parentElement.style['background-color'] = '#397514';
      }
    } else if (temp < -0.01) {
      if (temp < -5) {
        if (temp < -10) {
          widget.domNode.parentElement.style['background-color'] = '#b94e4e';
        } else {
          widget.domNode.parentElement.style['background-color'] = '#a13030';
        }
      } else {
        widget.domNode.parentElement.style['background-color'] = '#880e0e';
      }
    }
  },
});

export default __class;

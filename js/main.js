Vue.component('tab-home', {
  template: `
      <div>
        <!-- Page Heading -->
          <div class="row">
                <div class="col-lg-12">
                  <h1 class="page-header">
                    <em>{{ select_year }}</em> Statistics <small> Overview</small>
                  </h1>
                  <ol class="breadcrumb">
                    <li class="active">
                      <i class="fas fa-chart-line"></i> Current Status Month of:
                      <select
                        class="select-month"
                        v-model="select_month"
                        name="month"
                      >
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                      </select>
                    </li>
                  </ol>
                </div>
              </div>
              <!-- /.row -->
      
              <div class="row">
                <div class="col-lg-3 col-md-6">
                  <div class="panel panel-primary">
                    <div class="panel-heading">
                      <div class="row">
                        <div class="col-xs-3">
                          <i class="fa fa-fw fa-truck fa-5x"></i>
                        </div>
                        <div class="col-xs-9 text-right">
                          <div class="huge">
                            {{
                              (
                                selectedMonth().reduce((currentTotal, sale) => {
                                  return sale.item + currentTotal;
                                }, 0) * 20
                              ).toLocaleString('en')
                            }}
                            php
                          </div>
                          <div>Delivery</div>
                        </div>
                      </div>
                    </div>
                    <a href="#">
                      <div class="panel-footer">
                        <span class="pull-left">View Details</span>
                        <span class="pull-right"
                          ><i class="fa fa-arrow-circle-right"></i
                        ></span>
                        <div class="clearfix"></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="panel panel-green">
                    <div class="panel-heading">
                      <div class="row">
                        <div class="col-xs-3">
                          <i class="fas fa-coins fa-5x"></i>
                        </div>
                        <div class="col-xs-9 text-right">
                          <div class="huge">
                            {{
                              (
                                selectedMonth().reduce((currentTotal, sale) => {
                                  return sale.payments + currentTotal;
                                }, 0) * 20
                              ).toLocaleString('en')
                            }}
                            php
                          </div>
                          <div>Remittances</div>
                        </div>
                      </div>
                    </div>
                    <a href="#">
                      <div class="panel-footer">
                        <span class="pull-left">View Details</span>
                        <span class="pull-right"
                          ><i class="fa fa-arrow-circle-right"></i
                        ></span>
                        <div class="clearfix"></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="panel panel-yellow">
                    <div class="panel-heading">
                      <div class="row">
                        <div class="col-xs-3">
                          <i class="fa fa-fw fa-wrench fa-5x"></i>
                        </div>
                        <div class="col-xs-9 text-right">
                          <div class="huge">
                            {{
                              expensesMonth()
                                .reduce((currentTotal, item) => {
                                  return item.amount + currentTotal;
                                }, 0)
                                .toLocaleString('en')
                            }}
                            php
                          </div>
                          <div>Expenses</div>
                        </div>
                      </div>
                    </div>
                    <a href="#">
                      <div class="panel-footer">
                        <span class="pull-left">View Details</span>
                        <span class="pull-right"
                          ><i class="fa fa-arrow-circle-right"></i
                        ></span>
                        <div class="clearfix"></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="panel panel-red">
                    <div class="panel-heading">
                      <div class="row">
                        <div class="col-xs-3">
                          <i class="fas fa-piggy-bank fa-5x"></i>
                        </div>
                        <div class="col-xs-9 text-right">
                          <div class="huge">
                            {{
                              (
                                selectedMonth().reduce((currentTotal, sale) => {
                                  return sale.payments + currentTotal;
                                }, 0) *
                                  20 -
                                expensesMonth().reduce((currentTotal, item) => {
                                  return item.amount + currentTotal;
                                }, 0)
                              ).toLocaleString('en')
                            }}
                            php
                          </div>
                          <div>Net Income</div>
                        </div>
                      </div>
                    </div>
                    <a href="#">
                      <div class="panel-footer">
                        <span class="pull-left">View Details</span>
                        <span class="pull-right"
                          ><i class="fa fa-arrow-circle-right"></i
                        ></span>
                        <div class="clearfix"></div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <!-- /.row -->
      
              <div class="row">
                <div class="col-lg-12">
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h3 class="panel-title">
                        Summary Details
                        <span class="text-muted">
                          <select
                            class="select-year"
                            v-model="select_year"
                            name="year"
                          >
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                          </select>
                        </span>
                      </h3>
                    </div>
                    <div class="panel-body">
                      <div class="table-responsive">
                        <table class="table table-bordered table-hover table-striped">
                          <thead>
                            <tr>
                              <th>Month</th>
                              <th>Delivery</th>
                              <th>Remittance</th>
                              <th>Expenses</th>
                              <th>Net Income</th>
                            </tr>
                          </thead>
                          <tfoot>
                            <tr>
                              <th>Total</th>
                              <th>
                                {{
                                  (
                                    sales
                                      .filter((sale) =>
                                        sale.date.match(this.select_year)
                                      )
                                      .reduce((currentTotal, sale) => {
                                        return sale.item + currentTotal;
                                      }, 0) * 20
                                  ).toLocaleString('en')
                                }}php
                              </th>
                              <th>
                                {{
                                  (
                                    sales
                                      .filter((sale) =>
                                        sale.date.match(this.select_year)
                                      )
                                      .reduce((currentTotal, sale) => {
                                        return sale.payments + currentTotal;
                                      }, 0) * 20
                                  ).toLocaleString('en')
                                }}php
                              </th>
                              <th>
                                {{
                                  items
                                    .filter((item) =>
                                      item.date.match(this.select_year)
                                    )
                                    .reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                    .toLocaleString('en')
                                }}php
                              </th>
                              <th>
                                {{
                                  (
                                    sales
                                      .filter((sale) =>
                                        sale.date.match(this.select_year)
                                      )
                                      .reduce((currentTotal, sale) => {
                                        return sale.payments + currentTotal;
                                      }, 0) *
                                      20 -
                                    items
                                      .filter((item) =>
                                        item.date.match(this.select_year)
                                      )
                                      .reduce((currentTotal, item) => {
                                        return item.amount + currentTotal;
                                      }, 0)
                                  ).toLocaleString('en')
                                }}php
                              </th>
                            </tr>
                          </tfoot>
                          <tbody>
                            <tr>
                              <td>January</td>
                              <td>
                                {{
                                  (
                                    January.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.item + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    January.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  January_.filter((item) =>
                                    item.date.match(this.select_year)
                                  )
                                    .reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                    .toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    January.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) *
                                      20 -
                                    January_.filter((item) =>
                                      item.date.match(this.select_year)
                                    ).reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                  ).toLocaleString('en')
                                }}
                              </td>
                            </tr>
                            <tr>
                              <td>February</td>
                              <td>
                                {{
                                  (
                                    February.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.item + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    February.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  February_.filter((item) =>
                                    item.date.match(this.select_year)
                                  )
                                    .reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                    .toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    February.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) *
                                      20 -
                                    February_.filter((item) =>
                                      item.date.match(this.select_year)
                                    ).reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                  ).toLocaleString('en')
                                }}
                              </td>
                            </tr>
                            <tr>
                              <td>March</td>
                              <td>
                                {{
                                  (
                                    March.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.item + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    March.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  March_.filter((item) =>
                                    item.date.match(this.select_year)
                                  )
                                    .reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                    .toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    March.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) *
                                      20 -
                                    March_.filter((item) =>
                                      item.date.match(this.select_year)
                                    ).reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                  ).toLocaleString('en')
                                }}
                              </td>
                            </tr>
                            <tr>
                              <td>April</td>
                              <td>
                                {{
                                  (
                                    April.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.item + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    April.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  April_.filter((item) =>
                                    item.date.match(this.select_year)
                                  )
                                    .reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                    .toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    April.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) *
                                      20 -
                                    April_.filter((item) =>
                                      item.date.match(this.select_year)
                                    ).reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                  ).toLocaleString('en')
                                }}
                              </td>
                            </tr>
                            <tr>
                              <td>May</td>
                              <td>
                                {{
                                  (
                                    May.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.item + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    May.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  May_.filter((item) =>
                                    item.date.match(this.select_year)
                                  )
                                    .reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                    .toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    May.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) *
                                      20 -
                                    May_.filter((item) =>
                                      item.date.match(this.select_year)
                                    ).reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                  ).toLocaleString('en')
                                }}
                              </td>
                            </tr>
                            <tr>
                              <td>June</td>
                              <td>
                                {{
                                  (
                                    June.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.item + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    June.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  June_.filter((item) =>
                                    item.date.match(this.select_year)
                                  )
                                    .reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                    .toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    June.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) *
                                      20 -
                                    June_.filter((item) =>
                                      item.date.match(this.select_year)
                                    ).reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                  ).toLocaleString('en')
                                }}
                              </td>
                            </tr>
                            <tr>
                              <td>July</td>
                              <td>
                                {{
                                  (
                                    July.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.item + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    July.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  July_.filter((item) =>
                                    item.date.match(this.select_year)
                                  )
                                    .reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                    .toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    July.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) *
                                      20 -
                                    July_.filter((item) =>
                                      item.date.match(this.select_year)
                                    ).reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                  ).toLocaleString('en')
                                }}
                              </td>
                            </tr>
                            <tr>
                              <td>August</td>
                              <td>
                                {{
                                  (
                                    August.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.item + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    August.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  August_.filter((item) =>
                                    item.date.match(this.select_year)
                                  )
                                    .reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                    .toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    August.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) *
                                      20 -
                                    August_.filter((item) =>
                                      item.date.match(this.select_year)
                                    ).reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                  ).toLocaleString('en')
                                }}
                              </td>
                            </tr>
                            <tr>
                              <td>September</td>
                              <td>
                                {{
                                  (
                                    September.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.item + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    September.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  September_.filter((item) =>
                                    item.date.match(this.select_year)
                                  )
                                    .reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                    .toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    September.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) *
                                      20 -
                                    September_.filter((item) =>
                                      item.date.match(this.select_year)
                                    ).reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                  ).toLocaleString('en')
                                }}
                              </td>
                            </tr>
                            <tr>
                              <td>October</td>
                              <td>
                                {{
                                  (
                                    October.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.item + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    October.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  October_.filter((item) =>
                                    item.date.match(this.select_year)
                                  )
                                    .reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                    .toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    October.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) *
                                      20 -
                                    October_.filter((item) =>
                                      item.date.match(this.select_year)
                                    ).reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                  ).toLocaleString('en')
                                }}
                              </td>
                            </tr>
                            <tr>
                              <td>November</td>
                              <td>
                                {{
                                  (
                                    November.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.item + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    November.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  November_.filter((item) =>
                                    item.date.match(this.select_year)
                                  )
                                    .reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                    .toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    November.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) *
                                      20 -
                                    November_.filter((item) =>
                                      item.date.match(this.select_year)
                                    ).reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                  ).toLocaleString('en')
                                }}
                              </td>
                            </tr>
                            <tr>
                              <td>December</td>
                              <td>
                                {{
                                  (
                                    December.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.item + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    December.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) * 20
                                  ).toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  December_.filter((item) =>
                                    item.date.match(this.select_year)
                                  )
                                    .reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                    .toLocaleString('en')
                                }}
                              </td>
                              <td>
                                {{
                                  (
                                    December.filter((sale) =>
                                      sale.date.match(this.select_year)
                                    ).reduce((currentTotal, sale) => {
                                      return sale.payments + currentTotal;
                                    }, 0) *
                                      20 -
                                    December_.filter((item) =>
                                      item.date.match(this.select_year)
                                    ).reduce((currentTotal, item) => {
                                      return item.amount + currentTotal;
                                    }, 0)
                                  ).toLocaleString('en')
                                }}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="text-center">
                        <a href="#">Copyright © Biler IT Solutions 2022</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /.row -->
            </div>
        `,
  data() {
    return {
      select_month: 'March',
      select_year: 2021
      /* select_month: this.currentMonth(),
      select_year: new Date().getFullYear() */
    };
  },
  computed: {
    ...Vuex.mapState('salesModule', ['sales']),
    ...Vuex.mapState('expensesModule', ['items']),
    ...Vuex.mapGetters('salesModule', [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]),
    ...Vuex.mapGetters('expensesModule', [
      'January_',
      'February_',
      'March_',
      'April_',
      'May_',
      'June_',
      'July_',
      'August_',
      'September_',
      'October_',
      'November_',
      'December_'
    ])
  },
  methods: {
    ...Vuex.mapActions('customersModule', ['getCustomersAction']),
    ...Vuex.mapActions('salesModule', ['getSalesAction']),
    ...Vuex.mapActions('expensesModule', ['getExpensesAction']),

    currentMonth() {
      const month = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ];

      const d = new Date();
      let name = month[d.getMonth()];
      return name;
    },
    selectedMonth() {
      if (this.select_month === 'January') {
        return this.January.filter((sale) => sale.date.match(this.select_year));
      } else if (this.select_month === 'February') {
        return this.February.filter((sale) =>
          sale.date.match(this.select_year)
        );
      } else if (this.select_month === 'March') {
        return this.March.filter((sale) => sale.date.match(this.select_year));
      } else if (this.select_month === 'April') {
        return this.April.filter((sale) => sale.date.match(this.select_year));
      } else if (this.select_month === 'May') {
        return this.May.filter((sale) => sale.date.match(this.select_year));
      } else if (this.select_month === 'June') {
        return this.June.filter((sale) => sale.date.match(this.select_year));
      } else if (this.select_month === 'July') {
        return this.July.filter((sale) => sale.date.match(this.select_year));
      } else if (this.select_month === 'August') {
        return this.August.filter((sale) => sale.date.match(this.select_year));
      } else if (this.select_month === 'September') {
        return this.September.filter((sale) =>
          sale.date.match(this.select_year)
        );
      } else if (this.select_month === 'October') {
        return this.October.filter((sale) => sale.date.match(this.select_year));
      } else if (this.select_month === 'November') {
        return this.November.filter((sale) =>
          sale.date.match(this.select_year)
        );
      } else {
        return this.December.filter((sale) =>
          sale.date.match(this.select_year)
        );
      }
    },

    expensesMonth() {
      if (this.select_month === 'January') {
        return this.January_.filter((item) =>
          item.date.match(this.select_year)
        );
      } else if (this.select_month === 'February') {
        return this.February_.filter((item) =>
          item.date.match(this.select_year)
        );
      } else if (this.select_month === 'March') {
        return this.March_.filter((item) => item.date.match(this.select_year));
      } else if (this.select_month === 'April') {
        return this.April_.filter((item) => item.date.match(this.select_year));
      } else if (this.select_month === 'May') {
        return this.May_.filter((item) => item.date.match(this.select_year));
      } else if (this.select_month === 'June') {
        return this.June_.filter((item) => item.date.match(this.select_year));
      } else if (this.select_month === 'July') {
        return this.July_.filter((item) => item.date.match(this.select_year));
      } else if (this.select_month === 'August') {
        return this.August_.filter((item) => item.date.match(this.select_year));
      } else if (this.select_month === 'September') {
        return this.September_.filter((item) =>
          item.date.match(this.select_year)
        );
      } else if (this.select_month === 'October') {
        return this.October_.filter((item) =>
          item.date.match(this.select_year)
        );
      } else if (this.select_month === 'November') {
        return this.November_.filter((item) =>
          item.date.match(this.select_year)
        );
      } else {
        return this.December_.filter((item) =>
          item.date.match(this.select_year)
        );
      }
    }
  }
});

Vue.component('tab-customers', {
  template: `
        <div class="row">
          <div class="col-lg-12">
            <h2>Customers</h2>
            <ol class="breadcrumb">
              <li class="breadcrumb-li" @click.prevent="showAddForm">
                Add
              </li>
              <li class="breadcrumb-li" @click.prevent="showUpdateIcon">
                Edit
              </li>
              <li class="breadcrumb-li" @click.prevent="showDeleteButton">
                Delete
              </li>
              <li class="breadcrumb-li" @click.prevent="cancelButton">
                Cancel
              </li>
              <li class="breadcrumb-li">
                Search:
                <input
                  type="search"
                  class="search-input"
                  v-model="search_value"
                />
              </li>
            </ol>
            <!-- <div class="alert alert-success">
              <strong>Success!</strong> You successfully finished process.
            </div>
            <div class="alert alert-danger">
              <strong>Ooops!</strong> Change a few things up and try submitting
              again.
            </div> -->
            <div class="table-responsive">
              <table class="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Area</th>
                    <th>Seller</th>
                    <th>Contact</th>
                    <th>Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- add customer section -->
                  <tr v-if="show_add_form == true">
                    <td class="prevent-wordbreak">
                      <span
                        @click.prevent="addNewCust"
                        class="label label-success"
                        >Submit</span
                      >

                      <input v-model="add_form.name" type="text" />
                    </td>
                    <td><input v-model="add_form.area" type="text" /></td>
                    <td>
                      <select v-model="add_form.seller" name="seller">
                        <option value="station">station</option>
                        <option value="seller1">seller1</option>
                        <option value="seller2">seller2</option>
                      </select>
                    </td>
                    <td>
                      <input v-model.number="add_form.contact" type="number" />
                    </td>
                    <td>
                      <textarea v-model="add_form.remarks" />
                    </td>
                  </tr>
                  <!-- end add customer section -->
                  <tr v-for="customer in searchCustomer()" :key="customer.id">
                    <td class="prevent-wordbreak">
                      <span
                        v-show="show_update_icon == true"
                        class="small text-muted"
                      >
                        <i
                          class="fas fa-pencil-alt"
                          @click.prevent="showUpdateForm(customer.id)"
                        ></i>
                      </span>
                      <span
                        @click.prevent="deleteCustomerAction(customer)"
                        v-show="show_delete_button == true"
                        class="label label-danger"
                        >Delete</span
                      >
                      <span class="prevent-wordbreak">
                        <span
                          @click.prevent="updCust(customer)"
                          v-show="
                            show_update_form == true &&
                              selected_id === customer.id
                          "
                          class="label label-success"
                        >
                          Update
                        </span>
                        {{ customer.name }} </span
                      ><br />
                      <input
                        type="text"
                        v-model="customer.name"
                        v-show="selected_id === customer.id"
                      />
                    </td>
                    <td>
                      {{ customer.area }}<br />
                      <input
                        type="text"
                        v-model="customer.area"
                        v-show="selected_id === customer.id"
                      />
                    </td>
                    <td>
                      {{ customer.seller }}<br />
                      <input
                        type="text"
                        v-model="customer.seller"
                        v-show="selected_id === customer.id"
                      />
                    </td>
                    <td>
                      {{ customer.contact }}<br />
                      <input
                        type="number"
                        v-model.number="customer.contact"
                        v-show="selected_id === customer.id"
                      />
                    </td>
                    <td>
                      {{ customer.remarks }}<br />
                      <textarea
                        v-model="customer.remarks"
                        v-show="selected_id === customer.id"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!-- /.row -->
`,
  data() {
    return {
      search_value: '',
      add_form: {
        id: '',
        name: '',
        area: '',
        seller: 'station',
        contact: '',
        remarks: ''
      }
    };
  },
  computed: {
    ...Vuex.mapState('customersModule', ['customers']),
    ...Vuex.mapState([
      'selected_id',
      'show_add_form',
      'show_update_form',
      'show_update_icon',
      'show_delete_button'
    ])
  },
  methods: {
    ...Vuex.mapActions([
      'showAddForm',
      'showUpdateForm',
      'showUpdateIcon',
      'showDeleteButton',
      'cancelButton'
    ]),
    ...Vuex.mapActions('customersModule', [
      'addCustomerAction',
      'updateCustomerAction',
      'deleteCustomerAction'
    ]),

    addNewCust() {
      this.addCustomerAction({
        id: Math.random().toString(36).substring(2),
        name: this.add_form.name,
        area: this.add_form.area,
        seller: this.add_form.seller,
        contact: this.add_form.contact,
        remarks: this.add_form.remarks
      });
      (this.add_form.id = ''),
        (this.add_form.name = ''),
        (this.add_form.area = ''),
        (this.add_form.seller = 'station'),
        (this.add_form.contact = ''),
        (this.add_form.remarks = '');
    },

    // update customer section
    updCust(selected_cust) {
      this.updateCustomerAction({
        id: selected_cust.id,
        name: selected_cust.name,
        area: selected_cust.area,
        seller: selected_cust.seller,
        contact: selected_cust.contact,
        remarks: selected_cust.remarks
      });
    },

    searchCustomer() {
      let findMatch = /([a-z])\w+/gi;
      findMatch = this.search_value;
      if (this.search_value != null) {
        return this.customers.filter(
          (customer) =>
            customer.name.match(findMatch) ||
            customer.area.match(findMatch) ||
            customer.seller.match(findMatch)
        );
      }
    }
  }
});

Vue.component('tab-sales', {
  template: `
      <div class="row">
                <div class="col-lg-12">
                  <h2>Sales</h2>
                  <ol class="breadcrumb">
                    <li class="breadcrumb-li" @click.prevent="showAddForm">
                      Add
                    </li>
                    <li class="breadcrumb-li" @click.prevent="showUpdateIcon">
                      Edit
                    </li>
                    <li class="breadcrumb-li" @click.prevent="showDeleteButton">
                      Delete
                    </li>
                    <li class="breadcrumb-li" @click.prevent="cancelButton">
                      Cancel
                    </li>
                    <li class="breadcrumb-li">
                      Month:
                      <select
                        class="select-month"
                        v-model="select_month"
                        name="month"
                      >
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                      </select>
                      <span>
                        <select class="select-year" v-model="select_year" name="year">
                          <option value="2020">2020</option>
                          <option value="2021">2021</option>
                          <option value="2022">2022</option>
                          <option value="2023">2023</option>
                          <option value="2024">2024</option>
                          <option value="2025">2025</option>
                          <option value="2026">2026</option>
                          <option value="2027">2027</option>
                          <option value="2028">2028</option>
                          <option value="2029">2029</option>
                        </select>
                      </span>
                    </li>
                    <li class="breadcrumb-li">
                      Search:
                      <input
                        type="search"
                        class="search-input"
                        v-model="search_value"
                      />
                    </li>
                  </ol>
                  <!-- <div class="alert alert-success">
                    <strong>Success!</strong> You successfully finished process.
                  </div>
                  <div class="alert alert-danger">
                    <strong>Ooops!</strong> Change a few things up and try submitting
                    again.
                  </div> -->
                  <div class="table-responsive">
                    <table class="table table-bordered table-hover">
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Customer</th>
                          <th>Seller</th>
                          <th>Deliver</th>
                          <th>Paid</th>
                          <th>Remarks</th>
                        </tr>
                      </thead>
                      <tbody>
                        <!-- add new item section -->
                        <tr v-if="show_add_form == true">
                          <td class="prevent-wordbreak">
                            <span
                              @click.prevent="addNewSale"
                              class="label label-success"
                              >Submit</span
                            >
                            <input v-model="add_form.date" type="date" />
                          </td>
                          <td>
                            <input v-model="add_form.customer" type="text" />
                          </td>
                          <td>
                            <select v-model="add_form.seller" name="seller">
                              <option value="station">station</option>
                              <option value="seller1">seller1</option>
                              <option value="seller2">seller2</option>
                            </select>
                          </td>
                          <td>
                            <input v-model.number="add_form.item" type="number" />
                          </td>
                          <td>
                            <input v-model.number="add_form.payments" type="number" />
                          </td>
                          <td>
                            <textarea v-model="add_form.remarks" />
                          </td>
                        </tr>
                        <!-- end add customer section -->
      
                        <tr v-for="sale in searchItem()" :key="sale.id">
                          <td>
                            <span
                              v-show="show_update_icon == true"
                              class="small text-muted"
                            >
                              <i
                                class="fas fa-pencil-alt"
                                @click.prevent="showUpdateForm(sale.id)"
                              ></i>
                            </span>
                            <span
                              @click.prevent="deleteSaleAction(sale)"
                              v-show="show_delete_button == true"
                              class="label label-danger"
                              >Delete</span
                            >
                            <span class="prevent-wordbreak">
                              <span
                                @click.prevent="updSale(sale)"
                                v-show="
                                  show_update_form == true && selected_id === sale.id
                                "
                                class="label label-success"
                              >
                                Update
                              </span>
                              {{ sale.date }} </span
                            ><br />
                            <input
                              type="date"
                              class="input-date"
                              v-show="selected_id === sale.id"
                              v-model="sale.date"
                            />
                          </td>
                          <td>
                            {{ sale.customer }}<br />
                            <input
                              type="text"
                              v-model="sale.customer"
                              v-show="selected_id === sale.id"
                            />
                          </td>
                          <td>
                            {{ sale.seller }}<br />
                            <select
                              name="seller"
                              v-model="sale.seller"
                              v-show="selected_id === sale.id"
                            >
                              <option value="station">station</option>
                              <option value="seller1">seller1</option>
                              <option value="seller2">seller2</option>
                            </select>
                          </td>
                          <td>
                            {{ sale.item }}<br />
                            <input
                              type="number"
                              v-model.number="sale.item"
                              v-show="selected_id === sale.id"
                            />
                          </td>
                          <td>
                            {{ sale.payments }}<br />
                            <input
                              type="number"
                              v-model.number="sale.payments"
                              v-show="selected_id === sale.id"
                            />
                          </td>
                          <td>
                            {{ sale.remarks }}<br />
                            <textarea
                              v-model="sale.remarks"
                              v-show="selected_id === sale.id"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
            </div>`,
  data() {
    return {
      search_value: '',
      select_month: this.currentMonth(),
      select_year: new Date().getFullYear(),
      add_form: {
        id: '',
        date: new Date().toISOString().substring(0, 10),
        customer: '',
        seller: 'station',
        item: 0,
        payments: 0,
        remarks: ''
      }
    };
  },
  computed: {
    ...Vuex.mapState([
      'selected_id',
      'current_year',
      'show_add_form',
      'show_update_form',
      'show_update_icon',
      'show_delete_button'
    ]),
    ...Vuex.mapGetters('salesModule', [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ])
  },
  methods: {
    ...Vuex.mapActions([
      'showAddForm',
      'showUpdateForm',
      'showUpdateIcon',
      'showDeleteButton',
      'cancelButton'
    ]),

    ...Vuex.mapActions('salesModule', [
      'addSaleAction',
      'updateSaleAction',
      'deleteSaleAction'
    ]),
    // add section
    addNewSale() {
      this.addSaleAction({
        id: Math.random().toString(36).substring(2),
        date: this.add_form.date,
        customer: this.add_form.customer,
        seller: this.add_form.seller,
        item: this.add_form.item,
        payments: this.add_form.payments,
        remarks: this.add_form.remarks
      });
      this.add_form.id = '';
      this.add_form.date = new Date().toISOString().substring(0, 10);
      this.add_form.customer = '';
      this.add_form.seller = 'station';
      this.add_form.item = 0;
      this.add_form.payments = 0;
      this.add_form.remarks = '';
    },

    // update section
    updSale(selected_sale) {
      this.updateSaleAction({
        id: selected_sale.id,
        date: selected_sale.date,
        customer: selected_sale.customer,
        seller: selected_sale.seller,
        item: selected_sale.item,
        payments: selected_sale.payments,
        remarks: selected_sale.remarks
      });
    },

    currentMonth() {
      const month = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ];

      const d = new Date();
      let name = month[d.getMonth()];
      return name;
    }, //end of currenMonth()

    searchItem() {
      let findMatch = /([a-z])\w+/gi;
      findMatch = this.search_value;
      if (this.search_value != null) {
        return this.selectedMonth()
          .filter(
            (sale) =>
              sale.date.match(findMatch) ||
              sale.customer.match(findMatch) ||
              sale.seller.match(findMatch)
          )
          .filter((sale) => sale.date.match(this.select_year));
      }
    },

    selectedMonth() {
      if (this.select_month === 'January') {
        return this.January.filter((sale) => sale.date.match(this.select_year));
      } else if (this.select_month === 'February') {
        return this.February.filter((sale) =>
          sale.date.match(this.select_year)
        );
      } else if (this.select_month === 'March') {
        return this.March.filter((sale) => sale.date.match(this.select_year));
      } else if (this.select_month === 'April') {
        return this.April.filter((sale) => sale.date.match(this.select_year));
      } else if (this.select_month === 'May') {
        return this.May.filter((sale) => sale.date.match(this.select_year));
      } else if (this.select_month === 'June') {
        return this.June.filter((sale) => sale.date.match(this.select_year));
      } else if (this.select_month === 'July') {
        return this.July.filter((sale) => sale.date.match(this.select_year));
      } else if (this.select_month === 'August') {
        return this.August.filter((sale) => sale.date.match(this.select_year));
      } else if (this.select_month === 'September') {
        return this.September.filter((sale) =>
          sale.date.match(this.select_year)
        );
      } else if (this.select_month === 'October') {
        return this.October.filter((sale) => sale.date.match(this.select_year));
      } else if (this.select_month === 'November') {
        return this.November.filter((sale) =>
          sale.date.match(this.select_year)
        );
      } else {
        return this.December.filter((sale) =>
          sale.date.match(this.select_year)
        );
      }
    } //end of selectedMonth()
  }
});

Vue.component('tab-expenses', {
  template: `
        <div class="row">
          <div class="col-lg-12">
            <h2>Expenses</h2>
            <ol class="breadcrumb">
              <li class="breadcrumb-li" @click.prevent="showAddForm">
                Add
              </li>
              <li class="breadcrumb-li" @click.prevent="showUpdateIcon">
                Edit
              </li>
              <li class="breadcrumb-li" @click.prevent="showDeleteButton">
                Delete
              </li>
              <li class="breadcrumb-li" @click.prevent="cancelButton">
                Cancel
              </li>
              <li class="breadcrumb-li">
                Month:
                <select
                  class="select-month"
                  v-model="select_month"
                  name="month"
                >
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
                <span>
                  <select class="select-year" v-model="select_year" name="year">
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                  </select>
                </span>
              </li>
              <li class="breadcrumb-li">
                Search:
                <input
                  type="search"
                  class="search-input"
                  v-model="search_value"
                />
              </li>
            </ol>
            <!-- <div class="alert alert-success">
              <strong>Success!</strong> You successfully finished process.
            </div>
            <div class="alert alert-danger">
              <strong>Ooops!</strong> Change a few things up and try submitting
              again.
            </div> -->
            <div class="table-responsive">
              <table class="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Employee</th>
                    <th>Remarks</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- add new item section -->
                  <tr v-if="show_add_form == true">
                    <td class="prevent-wordbreak">
                      <span
                        @click.prevent="addNewItem"
                        class="label label-success"
                        >Submit</span
                      >
                      <input v-model="add_form.date" type="date" id="date" />
                    </td>
                    <td>
                      <select v-model="add_form.employee" name="seller">
                        <option value="station">station</option>
                        <option value="seller1">seller1</option>
                        <option value="seller2">seller2</option>
                      </select>
                    </td>
                    <td>
                      <textarea v-model="add_form.remarks" />
                    </td>
                    <td>
                      <input v-model.number="add_form.amount" type="number" />
                    </td>
                  </tr>
                  <!-- end add customer section -->
                  <tr v-for="item in searchItem()" :key="item.id">
                    <td class="prevent-wordbreak">
                      <span
                        v-show="show_update_icon == true"
                        class="small text-muted"
                      >
                        <i
                          class="fas fa-pencil-alt"
                          @click.prevent="showUpdateForm(item.id)"
                        ></i>
                      </span>
                      <span
                        @click.prevent="deleteItemAction(item)"
                        v-show="show_delete_button == true"
                        class="label label-danger"
                        >Delete</span
                      >
                      <span class="prevent-wordbreak">
                        <span
                          @click.prevent="updItem(item)"
                          v-show="
                            show_update_form == true && selected_id === item.id
                          "
                          class="label label-success"
                        >
                          Update
                        </span>

                        {{ item.date }}</span
                      ><br />
                      <input
                        type="date"
                        class="input-date"
                        v-model="item.date"
                        v-show="selected_id === item.id"
                      />
                    </td>
                    <td>
                      {{ item.employee }}<br />
                      <input
                        type="text"
                        v-model="item.employee"
                        v-show="selected_id === item.id"
                      />
                    </td>
                    <td>
                      {{ item.remarks }}<br />
                      <textarea
                        v-model="item.remarks"
                        v-show="selected_id === item.id"
                      />
                    </td>
                    <td>
                      {{ item.amount.toLocaleString('en') }}<br />
                      <input
                        type="number"
                        v-model.number="item.amount"
                        v-show="selected_id === item.id"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>`,
  data() {
    return {
      search_value: '',
      select_month: this.currentMonth(),
      select_year: new Date().getFullYear(),
      // add  form
      add_form: {
        id: '',
        date: new Date().toISOString().substring(0, 10),
        employee: 'station',
        remarks: '',
        amount: 0
      }
    };
  },
  computed: {
    ...Vuex.mapState([
      'selected_id',
      'current_year',
      'show_add_form',
      'show_update_form',
      'show_update_icon',
      'show_delete_button'
    ]),
    ...Vuex.mapGetters('expensesModule', [
      'January_',
      'February_',
      'March_',
      'April_',
      'May_',
      'June_',
      'July_',
      'August_',
      'September_',
      'October_',
      'November_',
      'December_'
    ])
  },
  methods: {
    ...Vuex.mapActions([
      'showAddForm',
      'showUpdateForm',
      'showUpdateIcon',
      'showDeleteButton',
      'cancelButton'
    ]),

    ...Vuex.mapActions('expensesModule', [
      'addItemAction',
      'updateItemAction',
      'deleteItemAction'
    ]),

    // add section
    addNewItem() {
      this.addItemAction({
        id: Math.random().toString(36).substring(2),
        date: this.add_form.date,
        employee: this.add_form.employee,
        remarks: this.add_form.remarks,
        amount: this.add_form.amount
      });
      this.add_form.id = '';
      (this.add_form.date = new Date().toISOString().substring(0, 10)),
        (this.add_form.employee = 'station'),
        (this.add_form.remarks = ''),
        (this.add_form.amount = 0);
    },

    // update section
    updItem(selected_item) {
      this.updateItemAction({
        id: selected_item.id,
        date: selected_item.date,
        employee: selected_item.employee,
        remarks: selected_item.remarks,
        amount: selected_item.amount
      });
    },

    currentMonth() {
      const month = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ];

      const d = new Date();
      let name = month[d.getMonth()];
      return name;
    },

    searchItem() {
      let findMatch = /([a-z])\w+/gi;
      findMatch = this.search_value;
      if (this.search_value != null) {
        return this.expensesMonth()
          .filter(
            (item) =>
              item.date.match(findMatch) ||
              item.employee.match(findMatch) ||
              item.remarks.match(findMatch)
          )
          .filter((item) => item.date.match(this.select_year));
      }
    },

    expensesMonth() {
      if (this.select_month === 'January') {
        return this.January_.filter((item) =>
          item.date.match(this.select_year)
        );
      } else if (this.select_month === 'February') {
        return this.February_.filter((item) =>
          item.date.match(this.select_year)
        );
      } else if (this.select_month === 'March') {
        return this.March_.filter((item) => item.date.match(this.select_year));
      } else if (this.select_month === 'April') {
        return this.April_.filter((item) => item.date.match(this.select_year));
      } else if (this.select_month === 'May') {
        return this.May_.filter((item) => item.date.match(this.select_year));
      } else if (this.select_month === 'June') {
        return this.June_.filter((item) => item.date.match(this.select_year));
      } else if (this.select_month === 'July') {
        return this.July_.filter((item) => item.date.match(this.select_year));
      } else if (this.select_month === 'August') {
        return this.August_.filter((item) => item.date.match(this.select_year));
      } else if (this.select_month === 'September') {
        return this.September_.filter((item) =>
          item.date.match(this.select_year)
        );
      } else if (this.select_month === 'October') {
        return this.October_.filter((item) =>
          item.date.match(this.select_year)
        );
      } else if (this.select_month === 'November') {
        return this.November_.filter((item) =>
          item.date.match(this.select_year)
        );
      } else {
        return this.December_.filter((item) =>
          item.date.match(this.select_year)
        );
      }
    }
  }
});

Vue.component('tab-financials', {
  template: `
        <div>
          <!-- Main Content -->
          <div class="card-header">
              <h4>Financials Report
                <span class="text-muted">
                  <select class="select-year" v-model="select_year" name="year">
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                  </select>
                </span>
              </h4>
          </div>
          <div class="card-body">
              <div class="table-responsive">
                <table
                  class="table table-bordered"
                  width="100%"
                  cellspacing="0"
                >
                  <!-- delivery section -->
                  <tbody>
                    <tr>
                      <th>Delivery</th>
                      <th>Jan</th>
                      <th>Feb</th>
                      <th>Mar</th>
                      <th>Apr</th>
                      <th>May</th>
                      <th>Jun</th>
                      <th>Jul</th>
                      <th>Aug</th>
                      <th>Sept</th>
                      <th>Oct</th>
                      <th>Nov</th>
                      <th>Dec</th>
                      <th>Total</th>
                    </tr>
                    <tr>
                      <td>Station </td>
                      <td>
                        {{
                          January.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          February.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          March.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          April.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          May.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          June.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          July.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          August.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          September.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          October.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          November.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          December.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          sales
                            .filter(
                              sale =>
                                sale.seller.match(/station/g) &&
                                sale.date.match(this.select_year)
                            )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                    </tr>
                    <tr>
                      <td>Seller1</td>
                      <td>
                        {{
                          January.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          February.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          March.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          April.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          May.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          June.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          July.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          August.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          September.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          October.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          November.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          December.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          sales
                            .filter(
                              sale =>
                                sale.seller.match(/seller1/g) &&
                                sale.date.match(this.select_year)
                            )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                    </tr>
                    <tr>
                      <td>Seller2</td>
                      <td>
                        {{
                          January.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          February.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          March.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          April.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          May.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          June.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          July.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          August.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          September.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          October.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          November.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          December.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          sales
                            .filter(
                              sale =>
                                sale.seller.match(/seller2/g) &&
                                sale.date.match(this.select_year)
                            )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                    </tr>
                    <tr>
                      <th class="small text-muted">
                        <strong>No. of Items<br />Amount (x20Php)</strong>
                      </th>
                      <td>
                        {{
                          January.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              January.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          February.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              February.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          March.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              March.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          April.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              April.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          May.filter(sale => sale.date.match(this.select_year))
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              May.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          June.filter(sale => sale.date.match(this.select_year))
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              June.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          July.filter(sale => sale.date.match(this.select_year))
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              July.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          August.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              August.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          September.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              September.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          October.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              October.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          November.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              November.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          December.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              December.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.item + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          sales
                            .filter(sale => sale.date.match(this.select_year))
                            .reduce((currentTotal, sale) => {
                              return sale.item + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              sales
                                .filter(sale =>
                                  sale.date.match(this.select_year)
                                )
                                .reduce((currentTotal, sale) => {
                                  return sale.item + currentTotal;
                                }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                  <br /><br />

                  <!-- remittances section -->
                  <tbody>
                    <tr>
                      <th>Remittances</th>
                      <th>Jan</th>
                      <th>Feb</th>
                      <th>Mar</th>
                      <th>Apr</th>
                      <th>May</th>
                      <th>Jun</th>
                      <th>Jul</th>
                      <th>Aug</th>
                      <th>Sept</th>
                      <th>Oct</th>
                      <th>Nov</th>
                      <th>Dec</th>
                      <th>Total</th>
                    </tr>
                    <tr>
                      <td>Station </td>
                      <td>
                        {{
                          January.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          February.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          March.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          April.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          May.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          June.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          July.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          August.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          September.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          October.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          November.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          December.filter(
                            sale =>
                              sale.seller.match(/station/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          sales
                            .filter(
                              sale =>
                                sale.seller.match(/station/g) &&
                                sale.date.match(this.select_year)
                            )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                    </tr>
                    <tr>
                      <td>Seller1</td>
                      <td>
                        {{
                          January.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          February.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          March.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          April.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          May.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          June.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          July.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          August.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          September.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          October.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          November.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          December.filter(
                            sale =>
                              sale.seller.match(/seller1/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          sales
                            .filter(
                              sale =>
                                sale.seller.match(/seller1/g) &&
                                sale.date.match(this.select_year)
                            )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                    </tr>
                    <tr>
                      <td>Seller2</td>
                      <td>
                        {{
                          January.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          February.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          March.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          April.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          May.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          June.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          July.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          August.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          September.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          October.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          November.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          December.filter(
                            sale =>
                              sale.seller.match(/seller2/g) &&
                              sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          sales
                            .filter(
                              sale =>
                                sale.seller.match(/seller2/g) &&
                                sale.date.match(this.select_year)
                            )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                    </tr>
                    <tr>
                      <th class="small text-muted">
                        <strong>No. of Items<br />Amount (x20Php)</strong>
                      </th>
                      <td>
                        {{
                          January.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              January.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          February.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              February.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          March.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              March.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          April.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              April.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          May.filter(sale => sale.date.match(this.select_year))
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              May.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          June.filter(sale => sale.date.match(this.select_year))
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              June.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          July.filter(sale => sale.date.match(this.select_year))
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              July.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          August.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              August.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          September.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              September.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          October.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              October.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          November.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              November.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          December.filter(sale =>
                            sale.date.match(this.select_year)
                          )
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              December.filter(sale =>
                                sale.date.match(this.select_year)
                              ).reduce((currentTotal, sale) => {
                                return sale.payments + currentTotal;
                              }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                      <td>
                        {{
                          sales
                            .filter(sale => sale.date.match(this.select_year))
                            .reduce((currentTotal, sale) => {
                              return sale.payments + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                        <br />
                        <span class="amt">
                          {{
                            (
                              sales
                                .filter(sale =>
                                  sale.date.match(this.select_year)
                                )
                                .reduce((currentTotal, sale) => {
                                  return sale.payments + currentTotal;
                                }, 0) * 20
                            ).toLocaleString("en")
                          }}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                  <br /><br />

                  <!-- expenses section -->
                  <tbody>
                    <tr>
                      <th>Expenses</th>
                      <th>Jan</th>
                      <th>Feb</th>
                      <th>Mar</th>
                      <th>Apr</th>
                      <th>May</th>
                      <th>Jun</th>
                      <th>Jul</th>
                      <th>Aug</th>
                      <th>Sept</th>
                      <th>Oct</th>
                      <th>Nov</th>
                      <th>Dec</th>
                      <th>Total</th>
                    </tr>
                    <tr>
                      <td>Station </td>
                      <td>
                        {{
                          January_.filter(
                            item =>
                              item.employee.match(/station/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          February_.filter(
                            item =>
                              item.employee.match(/station/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          March_.filter(
                            item =>
                              item.employee.match(/station/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          April_.filter(
                            item =>
                              item.employee.match(/station/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          May_.filter(
                            item =>
                              item.employee.match(/station/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          June_.filter(
                            item =>
                              item.employee.match(/station/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          July_.filter(
                            item =>
                              item.employee.match(/station/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          August_.filter(
                            item =>
                              item.employee.match(/station/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          September_.filter(
                            item =>
                              item.employee.match(/station/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          October_.filter(
                            item =>
                              item.employee.match(/station/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          November_.filter(
                            item =>
                              item.employee.match(/station/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          December_.filter(
                            item =>
                              item.employee.match(/station/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          items
                            .filter(
                              item =>
                                item.employee.match(/station/g) &&
                                item.date.match(this.select_year)
                            )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                    </tr>
                    <tr>
                      <td>Seller1</td>
                      <td>
                        {{
                          January_.filter(
                            item =>
                              item.employee.match(/seller1/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          February_.filter(
                            item =>
                              item.employee.match(/seller1/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          March_.filter(
                            item =>
                              item.employee.match(/seller1/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          April_.filter(
                            item =>
                              item.employee.match(/seller1/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          May_.filter(
                            item =>
                              item.employee.match(/seller1/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          June_.filter(
                            item =>
                              item.employee.match(/seller1/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          July_.filter(
                            item =>
                              item.employee.match(/seller1/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          August_.filter(
                            item =>
                              item.employee.match(/seller1/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          September_.filter(
                            item =>
                              item.employee.match(/seller1/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          October_.filter(
                            item =>
                              item.employee.match(/seller1/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          November_.filter(
                            item =>
                              item.employee.match(/seller1/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          December_.filter(
                            item =>
                              item.employee.match(/seller1/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          items
                            .filter(
                              item =>
                                item.employee.match(/seller1/g) &&
                                item.date.match(this.select_year)
                            )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                    </tr>
                    <tr>
                      <td>Seller2</td>
                      <td>
                        {{
                          January_.filter(
                            item =>
                              item.employee.match(/seller2/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          February_.filter(
                            item =>
                              item.employee.match(/seller2/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          March_.filter(
                            item =>
                              item.employee.match(/seller2/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          April_.filter(
                            item =>
                              item.employee.match(/seller2/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          May_.filter(
                            item =>
                              item.employee.match(/seller2/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          June_.filter(
                            item =>
                              item.employee.match(/seller2/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          July_.filter(
                            item =>
                              item.employee.match(/seller2/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          August_.filter(
                            item =>
                              item.employee.match(/seller2/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          September_.filter(
                            item =>
                              item.employee.match(/seller2/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          October_.filter(
                            item =>
                              item.employee.match(/seller2/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          November_.filter(
                            item =>
                              item.employee.match(/seller2/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          December_.filter(
                            item =>
                              item.employee.match(/seller2/g) &&
                              item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                      <td>
                        {{
                          items
                            .filter(
                              item =>
                                item.employee.match(/seller2/g) &&
                                item.date.match(this.select_year)
                            )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </td>
                    </tr>
                    <tr>
                      <th class="small text-muted">
                        <strong>Amount (Php)</strong>
                      </th>
                      <th>
                        {{
                          January_.filter(item =>
                            item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </th>
                      <th>
                        {{
                          February_.filter(item =>
                            item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </th>
                      <th>
                        {{
                          March_.filter(item =>
                            item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </th>
                      <th>
                        {{
                          April_.filter(item =>
                            item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </th>
                      <th>
                        {{
                          May_.filter(item => item.date.match(this.select_year))
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </th>
                      <th>
                        {{
                          June_.filter(item =>
                            item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </th>
                      <th>
                        {{
                          July_.filter(item =>
                            item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </th>
                      <th>
                        {{
                          August_.filter(item =>
                            item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </th>
                      <th>
                        {{
                          September_.filter(item =>
                            item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </th>
                      <th>
                        {{
                          October_.filter(item =>
                            item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </th>
                      <th>
                        {{
                          November_.filter(item =>
                            item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </th>
                      <th>
                        {{
                          December_.filter(item =>
                            item.date.match(this.select_year)
                          )
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </th>
                      <th>
                        {{
                          items
                            .filter(item => item.date.match(this.select_year))
                            .reduce((currentTotal, item) => {
                              return item.amount + currentTotal;
                            }, 0)
                            .toLocaleString("en")
                        }}
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
          </div>
        </div>`,
  data() {
    return {
      select_year: 2021
      // select_year: new Date().getFullYear() 
    };
  },
  computed: {
    ...Vuex.mapState('salesModule', ['sales']),
    ...Vuex.mapState('expensesModule', ['items']),
    ...Vuex.mapGetters('salesModule', [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]),
    ...Vuex.mapGetters('expensesModule', [
      'January_',
      'February_',
      'March_',
      'April_',
      'May_',
      'June_',
      'July_',
      'August_',
      'September_',
      'October_',
      'November_',
      'December_'
    ])
  },
  methods: {
    currentMonth() {
      const month = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ];

      const d = new Date();
      let name = month[d.getMonth()];
      return name;
    },
    selectedMonth() {
      if (this.select_month === 'January') {
        return this.January.filter((sale) => sale.date.match(this.select_year));
      } else if (this.select_month === 'February') {
        return this.February.filter((sale) =>
          sale.date.match(this.select_year)
        );
      } else if (this.select_month === 'March') {
        return this.March.filter((sale) => sale.date.match(this.select_year));
      } else if (this.select_month === 'April') {
        return this.April.filter((sale) => sale.date.match(this.select_year));
      } else if (this.select_month === 'May') {
        return this.May.filter((sale) => sale.date.match(this.select_year));
      } else if (this.select_month === 'June') {
        return this.June.filter((sale) => sale.date.match(this.select_year));
      } else if (this.select_month === 'July') {
        return this.July.filter((sale) => sale.date.match(this.select_year));
      } else if (this.select_month === 'August') {
        return this.August.filter((sale) => sale.date.match(this.select_year));
      } else if (this.select_month === 'September') {
        return this.September.filter((sale) =>
          sale.date.match(this.select_year)
        );
      } else if (this.select_month === 'October') {
        return this.October.filter((sale) => sale.date.match(this.select_year));
      } else if (this.select_month === 'November') {
        return this.November.filter((sale) =>
          sale.date.match(this.select_year)
        );
      } else {
        return this.December.filter((sale) =>
          sale.date.match(this.select_year)
        );
      }
    },

    expensesMonth() {
      if (this.select_month === 'January') {
        return this.January_.filter((item) =>
          item.date.match(this.select_year)
        );
      } else if (this.select_month === 'February') {
        return this.February_.filter((item) =>
          item.date.match(this.select_year)
        );
      } else if (this.select_month === 'March') {
        return this.March_.filter((item) => item.date.match(this.select_year));
      } else if (this.select_month === 'April') {
        return this.April_.filter((item) => item.date.match(this.select_year));
      } else if (this.select_month === 'May') {
        return this.May_.filter((item) => item.date.match(this.select_year));
      } else if (this.select_month === 'June') {
        return this.June_.filter((item) => item.date.match(this.select_year));
      } else if (this.select_month === 'July') {
        return this.July_.filter((item) => item.date.match(this.select_year));
      } else if (this.select_month === 'August') {
        return this.August_.filter((item) => item.date.match(this.select_year));
      } else if (this.select_month === 'September') {
        return this.September_.filter((item) =>
          item.date.match(this.select_year)
        );
      } else if (this.select_month === 'October') {
        return this.October_.filter((item) =>
          item.date.match(this.select_year)
        );
      } else if (this.select_month === 'November') {
        return this.November_.filter((item) =>
          item.date.match(this.select_year)
        );
      } else {
        return this.December_.filter((item) =>
          item.date.match(this.select_year)
        );
      }
    }
  }
});

const customersModule = {
  namespaced: true,
  state: () => ({
    customers: [
      {
        id: 2,
        user_id: 1,
        name: 'B.Edil',
        area: 'Dalahican',
        seller: 'station',
        contact: null,
        remarks: null,
        created_at: '2021-10-12 19:22:34',
        updated_at: '2022-12-13 02:12:54'
      },
      {
        id: 40,
        user_id: 1,
        name: 'B.Gerry',
        area: 'Bantigue',
        seller: 'station',
        contact: null,
        remarks: null,
        created_at: '2021-10-12 19:47:45',
        updated_at: '2022-07-14 17:10:19'
      },
      {
        id: 92,
        user_id: 1,
        name: 'B. Jose Guevarra',
        area: 'Cotta',
        seller: 'station',
        contact: null,
        remarks: null,
        created_at: '2022-10-31 17:25:23',
        updated_at: '2022-10-31 17:25:23'
      },
      {
        id: 98,
        user_id: 1,
        name: 'Sis MG Cabiltes',
        area: 'Cotta',
        seller: 'station',
        contact: null,
        remarks: null,
        created_at: '2022-12-09 23:37:31',
        updated_at: '2022-12-09 23:37:31'
      },
      {
        id: 99,
        user_id: 1,
        name: 'Sis Rosalie',
        area: 'Redv',
        seller: 'station',
        contact: null,
        remarks: null,
        created_at: '2022-12-09 23:38:02',
        updated_at: '2022-12-09 23:38:02'
      }
    ]
  }),
  getters: {
    totalCustomerGetter: (state) => state.customers.length,
    totalCustomerStationGetter: (state) =>
      state.customers.filter((customer) => customer.seller === 'station')
        .length,
    totalCustomerSeller1Getter: (state) =>
      state.customers.filter((customer) => customer.seller === 'seller1')
        .length,
    totalCustomerSeller2Getter: (state) =>
      state.customers.filter((customer) => customer.seller === 'seller2').length
  },
  actions: {
    addCustomerAction({ commit }, payload) {
      commit('ADD_CUSTOMER', payload);
    },
    updateCustomerAction({ commit }, payload) {
      commit('UPDATE_CUSTOMER', payload);
    },
    deleteCustomerAction({ commit }, payload) {
      commit('DELETE_CUSTOMER', payload);
    }
  },
  mutations: {
    ADD_CUSTOMER: (state, payload) => {
      state.customers.push(payload);
      store.state.show_add_form = false;
    },
    UPDATE_CUSTOMER: (state, cust) => {
      const index = state.customers.findIndex(
        (customer) => customer.id === cust.id
      );
      if (index !== -1) {
        state.customers.splice(index, 1, cust);
      }
      store.state.show_update_form = false;
      store.state.selected_id = null;
    },
    DELETE_CUSTOMER: (state, payload) => {
      const index = state.customers.findIndex(
        (customer) => customer.id === payload.id
      );
      if (index !== -1) {
        state.customers.splice(index, 1);
      }
      store.state.show_delete_button = false;
      store.state.selected_id = null;
    }
  }
};

const salesModule = {
  namespaced: true,
  state: () => ({
    sales: [
      {
        id: 6,
        user_id: 1,
        date: '2021-03-12',
        customer: 'Lucban',
        seller: 'station',
        item: 24,
        payments: 25,
        remarks: 'basyo 25',
        created_at: '2021-10-14 10:52:25',
        updated_at: '2022-03-08 18:13:01'
      },
      {
        id: 8,
        user_id: 1,
        date: '2021-04-01',
        customer: 'Lucban',
        seller: 'station',
        item: 22,
        payments: 25,
        remarks: 'basyo 14bilog 11lapad',
        created_at: '2021-10-14 10:58:04',
        updated_at: '2021-10-14 11:01:15'
      },
      {
        id: 9,
        user_id: 1,
        date: '2021-04-13',
        customer: 'Lucban',
        seller: 'station',
        item: 24,
        payments: 24,
        remarks: 'basyo 16bilog 8lapad',
        created_at: '2021-10-14 11:00:45',
        updated_at: '2021-12-26 19:25:01'
      },
      {
        id: 11,
        user_id: 1,
        date: '2021-04-23',
        customer: 'Lucban',
        seller: 'station',
        item: 24,
        payments: 23,
        remarks: 'basyo 14bilog 9lapad',
        created_at: '2021-10-14 15:42:25',
        updated_at: '2021-12-21 20:37:13'
      },
      {
        id: 12,
        user_id: 1,
        date: '2021-05-09',
        customer: 'Lucban',
        seller: 'station',
        item: 23,
        payments: 26,
        remarks: 'basyo 8bilog 18lapad',
        created_at: '2021-10-14 15:43:55',
        updated_at: '2021-10-14 15:43:55'
      },
      {
        id: 14,
        user_id: 1,
        date: '2021-06-06',
        customer: 'Lucban',
        seller: 'station',
        item: 23,
        payments: 26,
        remarks: 'basyo 14bilog 9lapad',
        created_at: '2021-10-14 15:47:43',
        updated_at: '2021-10-14 15:47:43'
      },
      {
        id: 15,
        user_id: 1,
        date: '2021-06-19',
        customer: 'Lucban',
        seller: 'station',
        item: 23,
        payments: 23,
        remarks: 'basyo 12bilog 11lapad',
        created_at: '2021-10-14 15:48:46',
        updated_at: '2021-12-26 21:10:08'
      },
      {
        id: 16,
        user_id: 1,
        date: '2021-07-06',
        customer: 'Lucban',
        seller: 'station',
        item: 23,
        payments: 26,
        remarks: 'basyo 8bilog 18lapad',
        created_at: '2021-10-14 15:49:52',
        updated_at: '2021-10-14 15:49:52'
      },
      {
        id: 17,
        user_id: 1,
        date: '2021-07-20',
        customer: 'Lucban',
        seller: 'station',
        item: 26,
        payments: 21,
        remarks: 'basyo 11bilog 10lapad',
        created_at: '2021-10-14 15:51:10',
        updated_at: '2021-12-21 20:41:13'
      },
      {
        id: 18,
        user_id: 1,
        date: '2021-08-04',
        customer: 'Lucban',
        seller: 'station',
        item: 21,
        payments: 28,
        remarks: 'basyo 9bilog 19lapad',
        created_at: '2021-10-14 15:54:49',
        updated_at: '2021-12-21 20:41:58'
      },
      {
        id: 20,
        user_id: 1,
        date: '2021-09-02',
        customer: 'Lucban',
        seller: 'station',
        item: 45,
        payments: 24,
        remarks: null,
        created_at: '2021-10-14 15:59:27',
        updated_at: '2021-10-14 15:59:27'
      },
      {
        id: 21,
        user_id: 1,
        date: '2021-09-26',
        customer: 'Lucban',
        seller: 'station',
        item: 53,
        payments: 45,
        remarks: null,
        created_at: '2021-10-14 16:14:08',
        updated_at: '2021-10-14 16:14:08'
      },
      {
        id: 22,
        user_id: 1,
        date: '2021-01-03',
        customer: 'Tayabas',
        seller: 'station',
        item: 20,
        payments: 0,
        remarks: 'start',
        created_at: '2021-10-14 16:38:56',
        updated_at: '2021-10-16 06:42:57'
      },
      {
        id: 24,
        user_id: 1,
        date: '2021-01-28',
        customer: 'Tayabas',
        seller: 'station',
        item: 20,
        payments: 20,
        remarks: '4paid containers 500php ',
        created_at: '2021-10-14 16:42:03',
        updated_at: '2021-12-20 19:58:36'
      },
      {
        id: 26,
        user_id: 1,
        date: '2021-03-22',
        customer: 'Tayabas',
        seller: 'station',
        item: 20,
        payments: 0,
        remarks: null,
        created_at: '2021-10-14 16:44:59',
        updated_at: '2021-10-14 16:44:59'
      },
      {
        id: 28,
        user_id: 1,
        date: '2021-04-22',
        customer: 'Tayabas',
        seller: 'station',
        item: 22,
        payments: 33,
        remarks: null,
        created_at: '2021-10-14 17:09:17',
        updated_at: '2021-10-14 17:09:17'
      },
      {
        id: 29,
        user_id: 1,
        date: '2021-05-09',
        customer: 'Tayabas',
        seller: 'station',
        item: 19,
        payments: 0,
        remarks: '1container/laman paid 160php',
        created_at: '2021-10-14 17:12:20',
        updated_at: '2021-12-09 06:35:35'
      },
      {
        id: 30,
        user_id: 1,
        date: '2021-06-19',
        customer: 'Tayabas',
        seller: 'station',
        item: 8,
        payments: 27,
        remarks: null,
        created_at: '2021-10-14 17:18:23',
        updated_at: '2021-10-14 17:18:23'
      },
      {
        id: 32,
        user_id: 1,
        date: '2021-08-02',
        customer: 'Tayabas',
        seller: 'station',
        item: 0,
        payments: 20,
        remarks: null,
        created_at: '2021-10-14 17:20:56',
        updated_at: '2021-10-14 17:25:04'
      },
      {
        id: 33,
        user_id: 1,
        date: '2021-08-04',
        customer: 'Tayabas',
        seller: 'station',
        item: 20,
        payments: 0,
        remarks: null,
        created_at: '2021-10-14 17:22:28',
        updated_at: '2021-10-14 17:26:49'
      },
      {
        id: 34,
        user_id: 1,
        date: '2021-08-30',
        customer: 'Tayabas',
        seller: 'station',
        item: 21,
        payments: 20,
        remarks: null,
        created_at: '2021-10-14 17:23:04',
        updated_at: '2021-10-14 18:04:10'
      },
      {
        id: 35,
        user_id: 1,
        date: '2021-09-26',
        customer: 'Tayabas',
        seller: 'station',
        item: 14,
        payments: 23,
        remarks: null,
        created_at: '2021-10-14 17:30:22',
        updated_at: '2021-10-14 17:38:48'
      },
      {
        id: 38,
        user_id: 1,
        date: '2021-10-28',
        customer: 'Lucban',
        seller: 'station',
        item: 52,
        payments: 53,
        remarks: null,
        created_at: '2021-12-09 07:04:44',
        updated_at: '2021-12-09 07:04:44'
      },
      {
        id: 39,
        user_id: 1,
        date: '2021-12-08',
        customer: 'Lucban',
        seller: 'station',
        item: 52,
        payments: 52,
        remarks: 'basyo 52',
        created_at: '2021-12-09 07:05:38',
        updated_at: '2022-01-01 07:55:35'
      },
      {
        id: 41,
        user_id: 1,
        date: '2020-08-12',
        customer: 'mix',
        seller: 'seller2',
        item: 12,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 20:24:54',
        updated_at: '2021-12-18 20:24:54'
      },
      {
        id: 42,
        user_id: 1,
        date: '2020-08-12',
        customer: 'mix',
        seller: 'seller1',
        item: 15,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 20:25:46',
        updated_at: '2021-12-18 20:25:46'
      },
      {
        id: 43,
        user_id: 1,
        date: '2020-08-13',
        customer: 'mix',
        seller: 'seller2',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 20:28:10',
        updated_at: '2021-12-18 20:28:10'
      },
      {
        id: 45,
        user_id: 1,
        date: '2020-08-13',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 20:31:25',
        updated_at: '2021-12-18 20:31:25'
      },
      {
        id: 46,
        user_id: 1,
        date: '2020-08-14',
        customer: 'mix',
        seller: 'seller2',
        item: 8,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 20:32:16',
        updated_at: '2021-12-18 20:32:16'
      },
      {
        id: 47,
        user_id: 1,
        date: '2020-08-21',
        customer: 'mix',
        seller: 'seller1',
        item: 7,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 20:33:57',
        updated_at: '2021-12-18 21:15:00'
      },
      {
        id: 48,
        user_id: 1,
        date: '2020-08-15',
        customer: 'mix',
        seller: 'seller2',
        item: 33,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 20:35:16',
        updated_at: '2021-12-18 20:35:16'
      },
      {
        id: 49,
        user_id: 1,
        date: '2020-08-15',
        customer: 'mix',
        seller: 'seller1',
        item: 12,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 20:36:17',
        updated_at: '2021-12-18 20:36:17'
      },
      {
        id: 50,
        user_id: 1,
        date: '2020-08-16',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 20:37:40',
        updated_at: '2021-12-18 20:37:40'
      },
      {
        id: 51,
        user_id: 1,
        date: '2020-08-17',
        customer: 'mix',
        seller: 'seller2',
        item: 25,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 20:39:02',
        updated_at: '2021-12-18 20:39:02'
      },
      {
        id: 52,
        user_id: 1,
        date: '2020-08-17',
        customer: 'mix',
        seller: 'seller1',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 20:40:21',
        updated_at: '2021-12-18 20:40:21'
      },
      {
        id: 53,
        user_id: 1,
        date: '2020-08-18',
        customer: 'mix',
        seller: 'seller2',
        item: 29,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 20:42:05',
        updated_at: '2021-12-18 20:42:05'
      },
      {
        id: 54,
        user_id: 1,
        date: '2020-08-18',
        customer: 'mix',
        seller: 'seller1',
        item: 26,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 20:42:58',
        updated_at: '2021-12-18 20:42:58'
      },
      {
        id: 55,
        user_id: 1,
        date: '2020-08-19',
        customer: 'mix',
        seller: 'seller2',
        item: 13,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 20:43:28',
        updated_at: '2021-12-18 20:43:28'
      },
      {
        id: 56,
        user_id: 1,
        date: '2020-08-19',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 20:44:13',
        updated_at: '2021-12-18 20:44:13'
      },
      {
        id: 57,
        user_id: 1,
        date: '2020-08-20',
        customer: 'mix',
        seller: 'seller2',
        item: 8,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 20:47:45',
        updated_at: '2021-12-18 20:47:45'
      },
      {
        id: 58,
        user_id: 1,
        date: '2020-08-20',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 20:48:25',
        updated_at: '2021-12-18 20:48:25'
      },
      {
        id: 59,
        user_id: 1,
        date: '2020-08-21',
        customer: 'mix',
        seller: 'seller2',
        item: 8,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 20:49:23',
        updated_at: '2021-12-18 20:49:23'
      },
      {
        id: 61,
        user_id: 1,
        date: '2020-08-22',
        customer: 'mix',
        seller: 'seller2',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 20:50:51',
        updated_at: '2021-12-18 20:50:51'
      },
      {
        id: 62,
        user_id: 1,
        date: '2020-08-22',
        customer: 'mix',
        seller: 'seller1',
        item: 24,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 20:51:33',
        updated_at: '2021-12-18 20:51:33'
      },
      {
        id: 63,
        user_id: 1,
        date: '2020-08-23',
        customer: 'mix',
        seller: 'seller2',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 20:54:37',
        updated_at: '2021-12-18 20:54:37'
      },
      {
        id: 64,
        user_id: 1,
        date: '2020-08-23',
        customer: 'mix',
        seller: 'seller1',
        item: 7,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 20:55:11',
        updated_at: '2021-12-18 20:55:11'
      },
      {
        id: 65,
        user_id: 1,
        date: '2020-08-24',
        customer: 'mix',
        seller: 'seller2',
        item: 41,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 20:55:53',
        updated_at: '2021-12-18 20:55:53'
      },
      {
        id: 66,
        user_id: 1,
        date: '2020-08-24',
        customer: 'mix',
        seller: 'seller1',
        item: 21,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 20:56:21',
        updated_at: '2021-12-18 20:56:21'
      },
      {
        id: 67,
        user_id: 1,
        date: '2020-08-25',
        customer: 'mix',
        seller: 'seller2',
        item: 17,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 20:56:56',
        updated_at: '2021-12-18 20:56:56'
      },
      {
        id: 68,
        user_id: 1,
        date: '2020-08-25',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 20:57:34',
        updated_at: '2021-12-18 20:57:34'
      },
      {
        id: 69,
        user_id: 1,
        date: '2020-08-26',
        customer: 'mix',
        seller: 'seller2',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 20:58:21',
        updated_at: '2021-12-18 20:58:21'
      },
      {
        id: 70,
        user_id: 1,
        date: '2020-08-26',
        customer: 'mix',
        seller: 'seller1',
        item: 16,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 20:58:53',
        updated_at: '2021-12-18 20:58:53'
      },
      {
        id: 71,
        user_id: 1,
        date: '2020-08-27',
        customer: 'mix',
        seller: 'seller2',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 20:59:54',
        updated_at: '2021-12-18 20:59:54'
      },
      {
        id: 72,
        user_id: 1,
        date: '2020-08-27',
        customer: 'mix',
        seller: 'seller1',
        item: 9,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:00:50',
        updated_at: '2021-12-18 21:00:50'
      },
      {
        id: 73,
        user_id: 1,
        date: '2020-08-28',
        customer: 'mix',
        seller: 'seller2',
        item: 24,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:06:01',
        updated_at: '2021-12-18 21:16:58'
      },
      {
        id: 74,
        user_id: 1,
        date: '2020-08-28',
        customer: 'mix',
        seller: 'seller1',
        item: 13,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:06:25',
        updated_at: '2021-12-18 21:06:25'
      },
      {
        id: 75,
        user_id: 1,
        date: '2020-08-29',
        customer: 'mix',
        seller: 'seller1',
        item: 15,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:07:01',
        updated_at: '2021-12-18 21:07:01'
      },
      {
        id: 76,
        user_id: 1,
        date: '2020-08-30',
        customer: 'mix',
        seller: 'seller2',
        item: 44,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:07:38',
        updated_at: '2021-12-18 21:07:38'
      },
      {
        id: 77,
        user_id: 1,
        date: '2020-08-30',
        customer: 'mix',
        seller: 'seller1',
        item: 14,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:08:15',
        updated_at: '2021-12-18 21:08:15'
      },
      {
        id: 78,
        user_id: 1,
        date: '2020-08-31',
        customer: 'mix',
        seller: 'seller2',
        item: 12,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:09:26',
        updated_at: '2021-12-18 21:09:26'
      },
      {
        id: 79,
        user_id: 1,
        date: '2020-08-31',
        customer: 'mix',
        seller: 'seller1',
        item: 3,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:09:47',
        updated_at: '2021-12-18 21:09:47'
      },
      {
        id: 80,
        user_id: 1,
        date: '2020-08-14',
        customer: 'mix',
        seller: 'seller1',
        item: 21,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:12:54',
        updated_at: '2021-12-18 21:12:54'
      },
      {
        id: 81,
        user_id: 1,
        date: '2020-09-01',
        customer: 'mix',
        seller: 'seller2',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:20:45',
        updated_at: '2021-12-18 21:20:45'
      },
      {
        id: 82,
        user_id: 1,
        date: '2020-09-02',
        customer: 'mix',
        seller: 'seller2',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:21:20',
        updated_at: '2021-12-18 21:21:20'
      },
      {
        id: 83,
        user_id: 1,
        date: '2020-09-03',
        customer: 'mix',
        seller: 'seller2',
        item: 42,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:23:01',
        updated_at: '2021-12-18 21:23:01'
      },
      {
        id: 84,
        user_id: 1,
        date: '2020-09-05',
        customer: 'mix',
        seller: 'seller2',
        item: 13,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:24:02',
        updated_at: '2022-05-18 21:48:09'
      },
      {
        id: 85,
        user_id: 1,
        date: '2020-09-06',
        customer: 'mix',
        seller: 'seller2',
        item: 17,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:27:02',
        updated_at: '2022-05-18 21:47:59'
      },
      {
        id: 86,
        user_id: 1,
        date: '2020-09-07',
        customer: 'mix',
        seller: 'seller2',
        item: 28,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:29:12',
        updated_at: '2022-05-18 21:47:44'
      },
      {
        id: 87,
        user_id: 1,
        date: '2020-09-08',
        customer: 'mix',
        seller: 'seller2',
        item: 17,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:31:36',
        updated_at: '2022-05-18 21:47:35'
      },
      {
        id: 88,
        user_id: 1,
        date: '2020-09-09',
        customer: 'mix',
        seller: 'seller2',
        item: 17,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:33:07',
        updated_at: '2022-05-18 21:47:25'
      },
      {
        id: 89,
        user_id: 1,
        date: '2020-09-10',
        customer: 'mix',
        seller: 'seller2',
        item: 15,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:35:12',
        updated_at: '2022-05-18 21:47:16'
      },
      {
        id: 90,
        user_id: 1,
        date: '2020-09-11',
        customer: 'mix',
        seller: 'seller2',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:35:54',
        updated_at: '2022-05-18 21:47:07'
      },
      {
        id: 91,
        user_id: 1,
        date: '2020-09-12',
        customer: 'mix',
        seller: 'seller2',
        item: 29,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:36:36',
        updated_at: '2022-05-18 21:46:14'
      },
      {
        id: 92,
        user_id: 1,
        date: '2020-09-14',
        customer: 'mix',
        seller: 'seller2',
        item: 14,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:37:16',
        updated_at: '2022-05-18 21:46:06'
      },
      {
        id: 93,
        user_id: 1,
        date: '2020-09-15',
        customer: 'mix',
        seller: 'seller2',
        item: 38,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:37:32',
        updated_at: '2022-05-18 21:45:59'
      },
      {
        id: 94,
        user_id: 1,
        date: '2020-09-17',
        customer: 'mix',
        seller: 'seller2',
        item: 24,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:39:53',
        updated_at: '2022-05-18 21:45:44'
      },
      {
        id: 95,
        user_id: 1,
        date: '2020-09-20',
        customer: 'mix',
        seller: 'seller2',
        item: 23,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:40:12',
        updated_at: '2022-05-18 21:45:35'
      },
      {
        id: 96,
        user_id: 1,
        date: '2020-09-22',
        customer: 'mix',
        seller: 'seller2',
        item: 43,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:40:35',
        updated_at: '2022-05-18 21:45:26'
      },
      {
        id: 97,
        user_id: 1,
        date: '2020-09-24',
        customer: 'mix',
        seller: 'seller2',
        item: 23,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:41:01',
        updated_at: '2022-05-18 21:45:17'
      },
      {
        id: 98,
        user_id: 1,
        date: '2020-09-25',
        customer: 'mix',
        seller: 'seller2',
        item: 13,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:41:14',
        updated_at: '2022-05-18 21:45:07'
      },
      {
        id: 99,
        user_id: 1,
        date: '2020-09-26',
        customer: 'mix',
        seller: 'seller2',
        item: 14,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:41:31',
        updated_at: '2022-05-18 21:44:54'
      },
      {
        id: 100,
        user_id: 1,
        date: '2020-09-28',
        customer: 'mix',
        seller: 'seller2',
        item: 11,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:41:46',
        updated_at: '2022-05-18 21:44:46'
      },
      {
        id: 101,
        user_id: 1,
        date: '2020-09-29',
        customer: 'mix',
        seller: 'seller2',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:42:03',
        updated_at: '2022-05-18 21:44:36'
      },
      {
        id: 102,
        user_id: 1,
        date: '2020-09-30',
        customer: 'mix',
        seller: 'seller2',
        item: 43,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:42:27',
        updated_at: '2022-05-18 21:44:08'
      },
      {
        id: 103,
        user_id: 1,
        date: '2020-09-01',
        customer: 'mix',
        seller: 'seller1',
        item: 14,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:48:50',
        updated_at: '2021-12-18 21:48:50'
      },
      {
        id: 104,
        user_id: 1,
        date: '2020-09-02',
        customer: 'mix',
        seller: 'seller1',
        item: 20,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:49:09',
        updated_at: '2021-12-18 21:49:09'
      },
      {
        id: 105,
        user_id: 1,
        date: '2020-09-03',
        customer: 'mix',
        seller: 'seller1',
        item: 14,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:49:26',
        updated_at: '2021-12-18 21:49:26'
      },
      {
        id: 106,
        user_id: 1,
        date: '2020-09-04',
        customer: 'mix',
        seller: 'seller1',
        item: 18,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:49:43',
        updated_at: '2021-12-18 21:49:43'
      },
      {
        id: 107,
        user_id: 1,
        date: '2020-09-06',
        customer: 'mix',
        seller: 'seller1',
        item: 18,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:50:01',
        updated_at: '2021-12-18 21:50:01'
      },
      {
        id: 108,
        user_id: 1,
        date: '2020-09-07',
        customer: 'mix',
        seller: 'seller1',
        item: 18,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:50:10',
        updated_at: '2021-12-18 21:50:10'
      },
      {
        id: 109,
        user_id: 1,
        date: '2020-09-08',
        customer: 'mix',
        seller: 'seller1',
        item: 20,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:50:21',
        updated_at: '2021-12-18 21:50:21'
      },
      {
        id: 110,
        user_id: 1,
        date: '2020-09-09',
        customer: 'mix',
        seller: 'seller1',
        item: 7,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:50:35',
        updated_at: '2021-12-18 21:50:35'
      },
      {
        id: 111,
        user_id: 1,
        date: '2020-09-10',
        customer: 'mix',
        seller: 'seller1',
        item: 2,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:50:53',
        updated_at: '2021-12-18 21:50:53'
      },
      {
        id: 112,
        user_id: 1,
        date: '2020-09-11',
        customer: 'mix',
        seller: 'seller1',
        item: 13,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:51:15',
        updated_at: '2021-12-18 21:51:15'
      },
      {
        id: 113,
        user_id: 1,
        date: '2020-09-12',
        customer: 'mix',
        seller: 'seller1',
        item: 3,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:51:35',
        updated_at: '2021-12-18 21:51:35'
      },
      {
        id: 114,
        user_id: 1,
        date: '2020-09-13',
        customer: 'mix',
        seller: 'seller1',
        item: 27,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:51:55',
        updated_at: '2021-12-18 21:51:55'
      },
      {
        id: 115,
        user_id: 1,
        date: '2020-09-14',
        customer: 'mix',
        seller: 'seller1',
        item: 11,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:52:07',
        updated_at: '2021-12-18 21:52:07'
      },
      {
        id: 116,
        user_id: 1,
        date: '2020-09-15',
        customer: 'mix',
        seller: 'seller1',
        item: 19,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:52:19',
        updated_at: '2021-12-18 21:52:19'
      },
      {
        id: 117,
        user_id: 1,
        date: '2020-09-16',
        customer: 'mix',
        seller: 'seller1',
        item: 9,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:52:34',
        updated_at: '2021-12-18 21:52:34'
      },
      {
        id: 118,
        user_id: 1,
        date: '2020-09-17',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:52:45',
        updated_at: '2021-12-18 21:52:45'
      },
      {
        id: 119,
        user_id: 1,
        date: '2020-09-18',
        customer: 'mix',
        seller: 'seller1',
        item: 8,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:52:57',
        updated_at: '2021-12-18 21:52:57'
      },
      {
        id: 120,
        user_id: 1,
        date: '2020-09-19',
        customer: 'mix',
        seller: 'seller1',
        item: 19,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:53:10',
        updated_at: '2021-12-18 21:53:10'
      },
      {
        id: 121,
        user_id: 1,
        date: '2020-09-20',
        customer: 'mix',
        seller: 'seller1',
        item: 7,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:53:21',
        updated_at: '2021-12-18 21:53:21'
      },
      {
        id: 122,
        user_id: 1,
        date: '2020-09-21',
        customer: 'mix',
        seller: 'seller1',
        item: 7,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:53:30',
        updated_at: '2021-12-18 21:53:30'
      },
      {
        id: 123,
        user_id: 1,
        date: '2020-09-22',
        customer: 'mix',
        seller: 'seller1',
        item: 17,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:54:12',
        updated_at: '2021-12-18 22:03:29'
      },
      {
        id: 124,
        user_id: 1,
        date: '2020-09-23',
        customer: 'mix',
        seller: 'seller1',
        item: 17,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:54:23',
        updated_at: '2021-12-18 21:54:23'
      },
      {
        id: 125,
        user_id: 1,
        date: '2020-09-24',
        customer: 'mix',
        seller: 'seller1',
        item: 11,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:54:35',
        updated_at: '2021-12-18 21:54:35'
      },
      {
        id: 126,
        user_id: 1,
        date: '2020-09-25',
        customer: 'mix',
        seller: 'seller1',
        item: 21,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:54:47',
        updated_at: '2021-12-18 21:54:47'
      },
      {
        id: 127,
        user_id: 1,
        date: '2020-09-26',
        customer: 'mix',
        seller: 'seller1',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:55:00',
        updated_at: '2021-12-18 21:55:00'
      },
      {
        id: 128,
        user_id: 1,
        date: '2020-09-27',
        customer: 'mix',
        seller: 'seller1',
        item: 9,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:55:13',
        updated_at: '2021-12-18 21:55:13'
      },
      {
        id: 129,
        user_id: 1,
        date: '2020-09-28',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:55:24',
        updated_at: '2021-12-18 21:55:24'
      },
      {
        id: 130,
        user_id: 1,
        date: '2020-09-29',
        customer: 'mix',
        seller: 'seller1',
        item: 12,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:55:35',
        updated_at: '2021-12-18 22:07:51'
      },
      {
        id: 131,
        user_id: 1,
        date: '2020-09-30',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 21:55:51',
        updated_at: '2021-12-18 21:55:51'
      },
      {
        id: 132,
        user_id: 1,
        date: '2020-09-28',
        customer: 'mix',
        seller: 'station',
        item: 31,
        payments: 0,
        remarks: null,
        created_at: '2021-12-18 22:12:43',
        updated_at: '2021-12-18 22:12:43'
      },
      {
        id: 133,
        user_id: 1,
        date: '2020-10-01',
        customer: 'mix',
        seller: 'seller1',
        item: 26,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 12:34:18',
        updated_at: '2021-12-20 12:34:18'
      },
      {
        id: 134,
        user_id: 1,
        date: '2020-10-02',
        customer: 'mix',
        seller: 'seller1',
        item: 3,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 12:34:43',
        updated_at: '2021-12-20 12:34:43'
      },
      {
        id: 135,
        user_id: 1,
        date: '2020-10-03',
        customer: 'mix',
        seller: 'seller1',
        item: 12,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 12:34:59',
        updated_at: '2021-12-20 12:34:59'
      },
      {
        id: 136,
        user_id: 1,
        date: '2020-10-04',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 12:35:22',
        updated_at: '2021-12-20 12:35:22'
      },
      {
        id: 137,
        user_id: 1,
        date: '2020-10-05',
        customer: 'mix',
        seller: 'seller1',
        item: 7,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 12:36:07',
        updated_at: '2021-12-20 12:36:07'
      },
      {
        id: 138,
        user_id: 1,
        date: '2020-10-06',
        customer: 'mix',
        seller: 'seller1',
        item: 2,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 12:36:30',
        updated_at: '2021-12-20 12:36:30'
      },
      {
        id: 139,
        user_id: 1,
        date: '2020-10-07',
        customer: 'mix',
        seller: 'seller1',
        item: 16,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 12:40:13',
        updated_at: '2021-12-20 12:40:13'
      },
      {
        id: 140,
        user_id: 1,
        date: '2020-10-08',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 12:40:36',
        updated_at: '2021-12-20 12:40:36'
      },
      {
        id: 141,
        user_id: 1,
        date: '2020-10-09',
        customer: 'mix',
        seller: 'seller1',
        item: 20,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 12:40:49',
        updated_at: '2021-12-20 12:44:51'
      },
      {
        id: 142,
        user_id: 1,
        date: '2020-10-10',
        customer: 'mix',
        seller: 'seller1',
        item: 7,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 12:46:51',
        updated_at: '2021-12-20 12:51:54'
      },
      {
        id: 143,
        user_id: 1,
        date: '2020-10-11',
        customer: 'mix',
        seller: 'seller1',
        item: 12,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 12:47:21',
        updated_at: '2021-12-20 12:52:23'
      },
      {
        id: 144,
        user_id: 1,
        date: '2020-10-12',
        customer: 'mix',
        seller: 'seller1',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 12:47:48',
        updated_at: '2021-12-20 12:52:43'
      },
      {
        id: 145,
        user_id: 1,
        date: '2020-10-13',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 12:48:14',
        updated_at: '2021-12-20 12:53:03'
      },
      {
        id: 146,
        user_id: 1,
        date: '2020-10-14',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 12:48:35',
        updated_at: '2021-12-20 12:53:16'
      },
      {
        id: 147,
        user_id: 1,
        date: '2020-10-15',
        customer: 'mix',
        seller: 'seller1',
        item: 13,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 12:49:38',
        updated_at: '2021-12-20 12:53:30'
      },
      {
        id: 148,
        user_id: 1,
        date: '2020-10-16',
        customer: 'mix',
        seller: 'seller1',
        item: 3,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 12:49:57',
        updated_at: '2021-12-20 12:53:45'
      },
      {
        id: 149,
        user_id: 1,
        date: '2020-10-17',
        customer: 'mix',
        seller: 'seller1',
        item: 11,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 12:50:22',
        updated_at: '2021-12-20 12:53:59'
      },
      {
        id: 150,
        user_id: 1,
        date: '2020-10-19',
        customer: 'mix',
        seller: 'seller1',
        item: 16,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 12:51:19',
        updated_at: '2021-12-20 12:51:19'
      },
      {
        id: 151,
        user_id: 1,
        date: '2020-10-21',
        customer: 'mix',
        seller: 'seller1',
        item: 13,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 12:55:19',
        updated_at: '2021-12-20 12:55:19'
      },
      {
        id: 152,
        user_id: 1,
        date: '2020-10-22',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 12:56:09',
        updated_at: '2021-12-20 12:56:09'
      },
      {
        id: 153,
        user_id: 1,
        date: '2020-10-23',
        customer: 'mix',
        seller: 'seller1',
        item: 20,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 12:56:23',
        updated_at: '2021-12-20 12:56:23'
      },
      {
        id: 154,
        user_id: 1,
        date: '2020-10-24',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 12:56:35',
        updated_at: '2021-12-20 12:56:35'
      },
      {
        id: 155,
        user_id: 1,
        date: '2020-10-25',
        customer: 'mix',
        seller: 'seller1',
        item: 2,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 12:56:49',
        updated_at: '2021-12-20 12:56:49'
      },
      {
        id: 156,
        user_id: 1,
        date: '2020-10-26',
        customer: 'mix',
        seller: 'seller1',
        item: 13,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 12:57:04',
        updated_at: '2021-12-20 12:57:04'
      },
      {
        id: 157,
        user_id: 1,
        date: '2020-10-27',
        customer: 'mix',
        seller: 'seller1',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 12:57:20',
        updated_at: '2021-12-20 12:57:20'
      },
      {
        id: 158,
        user_id: 1,
        date: '2020-10-28',
        customer: 'mix',
        seller: 'seller1',
        item: 15,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 12:57:42',
        updated_at: '2021-12-20 12:57:42'
      },
      {
        id: 159,
        user_id: 1,
        date: '2020-10-29',
        customer: 'mix',
        seller: 'seller1',
        item: 3,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 12:57:56',
        updated_at: '2021-12-20 12:57:56'
      },
      {
        id: 160,
        user_id: 1,
        date: '2020-10-30',
        customer: 'mix',
        seller: 'seller1',
        item: 21,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 12:58:16',
        updated_at: '2021-12-20 12:58:16'
      },
      {
        id: 161,
        user_id: 1,
        date: '2020-10-01',
        customer: 'mix',
        seller: 'seller2',
        item: 22,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:09:48',
        updated_at: '2022-05-18 21:43:59'
      },
      {
        id: 162,
        user_id: 1,
        date: '2020-10-02',
        customer: 'mix',
        seller: 'seller2',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:10:02',
        updated_at: '2022-05-18 21:43:44'
      },
      {
        id: 163,
        user_id: 1,
        date: '2020-10-03',
        customer: 'mix',
        seller: 'seller2',
        item: 7,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:10:28',
        updated_at: '2022-05-18 21:43:34'
      },
      {
        id: 164,
        user_id: 1,
        date: '2020-10-05',
        customer: 'mix',
        seller: 'seller2',
        item: 30,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:10:52',
        updated_at: '2022-05-18 21:43:17'
      },
      {
        id: 165,
        user_id: 1,
        date: '2020-10-06',
        customer: 'mix',
        seller: 'seller2',
        item: 12,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:12:29',
        updated_at: '2022-05-18 21:43:09'
      },
      {
        id: 166,
        user_id: 1,
        date: '2020-10-07',
        customer: 'mix',
        seller: 'seller2',
        item: 17,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:12:41',
        updated_at: '2022-05-18 21:43:00'
      },
      {
        id: 167,
        user_id: 1,
        date: '2020-10-08',
        customer: 'mix',
        seller: 'seller2',
        item: 12,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:12:54',
        updated_at: '2022-05-18 21:42:49'
      },
      {
        id: 168,
        user_id: 1,
        date: '2020-10-09',
        customer: 'mix',
        seller: 'seller2',
        item: 18,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:13:05',
        updated_at: '2022-05-18 21:42:36'
      },
      {
        id: 169,
        user_id: 1,
        date: '2020-10-10',
        customer: 'mix',
        seller: 'seller2',
        item: 20,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:13:25',
        updated_at: '2021-12-20 13:13:25'
      },
      {
        id: 170,
        user_id: 1,
        date: '2020-10-11',
        customer: 'mix',
        seller: 'seller2',
        item: 12,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:13:44',
        updated_at: '2021-12-20 13:13:44'
      },
      {
        id: 171,
        user_id: 1,
        date: '2020-10-12',
        customer: 'mix',
        seller: 'seller2',
        item: 7,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:16:15',
        updated_at: '2021-12-20 13:16:15'
      },
      {
        id: 172,
        user_id: 1,
        date: '2020-10-13',
        customer: 'mix',
        seller: 'seller2',
        item: 12,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:19:00',
        updated_at: '2021-12-20 13:19:00'
      },
      {
        id: 173,
        user_id: 1,
        date: '2020-10-14',
        customer: 'mix',
        seller: 'seller2',
        item: 7,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:19:15',
        updated_at: '2021-12-20 13:19:15'
      },
      {
        id: 174,
        user_id: 1,
        date: '2020-10-15',
        customer: 'mix',
        seller: 'seller2',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:19:31',
        updated_at: '2021-12-20 13:19:31'
      },
      {
        id: 175,
        user_id: 1,
        date: '2020-10-17',
        customer: 'mix',
        seller: 'seller2',
        item: 36,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:19:55',
        updated_at: '2022-05-18 21:23:48'
      },
      {
        id: 176,
        user_id: 1,
        date: '2020-10-18',
        customer: 'mix',
        seller: 'seller2',
        item: 11,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:20:21',
        updated_at: '2022-05-18 21:42:25'
      },
      {
        id: 177,
        user_id: 1,
        date: '2020-10-19',
        customer: 'mix',
        seller: 'seller2',
        item: 15,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:20:34',
        updated_at: '2022-05-18 21:42:16'
      },
      {
        id: 178,
        user_id: 1,
        date: '2020-10-20',
        customer: 'mix',
        seller: 'seller2',
        item: 27,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:20:52',
        updated_at: '2022-05-18 21:42:05'
      },
      {
        id: 179,
        user_id: 1,
        date: '2020-10-21',
        customer: 'mix',
        seller: 'seller2',
        item: 20,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:21:19',
        updated_at: '2022-05-18 21:41:56'
      },
      {
        id: 180,
        user_id: 1,
        date: '2020-10-24',
        customer: 'mix',
        seller: 'seller2',
        item: 33,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:21:46',
        updated_at: '2022-05-18 21:41:44'
      },
      {
        id: 181,
        user_id: 1,
        date: '2020-10-25',
        customer: 'mix',
        seller: 'seller2',
        item: 18,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:21:58',
        updated_at: '2022-05-18 21:41:35'
      },
      {
        id: 182,
        user_id: 1,
        date: '2020-10-26',
        customer: 'mix',
        seller: 'seller2',
        item: 8,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:22:14',
        updated_at: '2022-05-18 21:41:22'
      },
      {
        id: 183,
        user_id: 1,
        date: '2020-10-27',
        customer: 'mix',
        seller: 'seller2',
        item: 7,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:22:30',
        updated_at: '2022-05-18 21:41:13'
      },
      {
        id: 184,
        user_id: 1,
        date: '2020-10-29',
        customer: 'mix',
        seller: 'seller2',
        item: 11,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:22:58',
        updated_at: '2022-05-18 21:41:05'
      },
      {
        id: 185,
        user_id: 1,
        date: '2020-10-30',
        customer: 'mix',
        seller: 'seller2',
        item: 17,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:23:18',
        updated_at: '2022-05-18 21:40:56'
      },
      {
        id: 186,
        user_id: 1,
        date: '2020-10-31',
        customer: 'mix',
        seller: 'seller2',
        item: 32,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:23:39',
        updated_at: '2022-05-18 21:40:47'
      },
      {
        id: 187,
        user_id: 1,
        date: '2020-11-01',
        customer: 'mix',
        seller: 'seller1',
        item: 15,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:45:28',
        updated_at: '2021-12-20 13:46:01'
      },
      {
        id: 188,
        user_id: 1,
        date: '2020-11-02',
        customer: 'mix',
        seller: 'seller1',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:46:23',
        updated_at: '2021-12-20 13:46:23'
      },
      {
        id: 189,
        user_id: 1,
        date: '2020-11-03',
        customer: 'mix',
        seller: 'seller1',
        item: 13,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:46:43',
        updated_at: '2021-12-20 13:46:43'
      },
      {
        id: 190,
        user_id: 1,
        date: '2020-11-05',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:47:21',
        updated_at: '2021-12-20 13:47:21'
      },
      {
        id: 191,
        user_id: 1,
        date: '2020-11-06',
        customer: 'mix',
        seller: 'seller1',
        item: 16,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:47:36',
        updated_at: '2021-12-20 13:47:36'
      },
      {
        id: 192,
        user_id: 1,
        date: '2020-11-07',
        customer: 'mix',
        seller: 'seller1',
        item: 8,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:47:49',
        updated_at: '2021-12-20 13:47:49'
      },
      {
        id: 193,
        user_id: 1,
        date: '2020-11-08',
        customer: 'mix',
        seller: 'seller1',
        item: 8,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:47:57',
        updated_at: '2021-12-20 13:47:57'
      },
      {
        id: 194,
        user_id: 1,
        date: '2020-11-09',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:48:10',
        updated_at: '2021-12-20 13:48:10'
      },
      {
        id: 195,
        user_id: 1,
        date: '2020-11-10',
        customer: 'mix',
        seller: 'seller1',
        item: 8,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:48:22',
        updated_at: '2021-12-20 13:48:22'
      },
      {
        id: 196,
        user_id: 1,
        date: '2020-11-11',
        customer: 'mix',
        seller: 'seller1',
        item: 12,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:48:36',
        updated_at: '2021-12-20 13:48:36'
      },
      {
        id: 197,
        user_id: 1,
        date: '2020-11-12',
        customer: 'mix',
        seller: 'seller1',
        item: 15,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:48:49',
        updated_at: '2021-12-20 13:48:49'
      },
      {
        id: 198,
        user_id: 1,
        date: '2020-11-13',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:49:02',
        updated_at: '2021-12-20 13:49:02'
      },
      {
        id: 199,
        user_id: 1,
        date: '2020-11-15',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:49:18',
        updated_at: '2021-12-20 13:49:18'
      },
      {
        id: 200,
        user_id: 1,
        date: '2020-11-16',
        customer: 'mix',
        seller: 'seller1',
        item: 3,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:49:31',
        updated_at: '2021-12-20 13:49:31'
      },
      {
        id: 201,
        user_id: 1,
        date: '2020-11-17',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:49:46',
        updated_at: '2021-12-20 13:49:46'
      },
      {
        id: 202,
        user_id: 1,
        date: '2020-11-18',
        customer: 'mix',
        seller: 'seller1',
        item: 15,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:49:59',
        updated_at: '2021-12-20 13:49:59'
      },
      {
        id: 203,
        user_id: 1,
        date: '2020-11-19',
        customer: 'mix',
        seller: 'seller1',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:50:10',
        updated_at: '2021-12-20 13:50:10'
      },
      {
        id: 204,
        user_id: 1,
        date: '2020-11-20',
        customer: 'mix',
        seller: 'seller1',
        item: 11,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:50:21',
        updated_at: '2021-12-20 13:50:21'
      },
      {
        id: 205,
        user_id: 1,
        date: '2020-11-21',
        customer: 'mix',
        seller: 'seller1',
        item: 2,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:50:33',
        updated_at: '2021-12-20 13:50:33'
      },
      {
        id: 206,
        user_id: 1,
        date: '2020-11-23',
        customer: 'mix',
        seller: 'seller1',
        item: 7,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:50:49',
        updated_at: '2021-12-20 13:50:49'
      },
      {
        id: 207,
        user_id: 1,
        date: '2020-11-24',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:50:59',
        updated_at: '2021-12-20 13:50:59'
      },
      {
        id: 208,
        user_id: 1,
        date: '2020-11-26',
        customer: 'mix',
        seller: 'seller1',
        item: 31,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:51:14',
        updated_at: '2021-12-20 13:51:14'
      },
      {
        id: 209,
        user_id: 1,
        date: '2020-11-27',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:51:26',
        updated_at: '2021-12-20 13:51:26'
      },
      {
        id: 210,
        user_id: 1,
        date: '2020-11-28',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:51:34',
        updated_at: '2021-12-20 13:51:34'
      },
      {
        id: 211,
        user_id: 1,
        date: '2020-11-29',
        customer: 'mix',
        seller: 'seller1',
        item: 8,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:51:47',
        updated_at: '2021-12-20 13:51:47'
      },
      {
        id: 212,
        user_id: 1,
        date: '2020-11-30',
        customer: 'mix',
        seller: 'seller1',
        item: 22,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:51:59',
        updated_at: '2021-12-20 13:51:59'
      },
      {
        id: 213,
        user_id: 1,
        date: '2020-11-02',
        customer: 'mix',
        seller: 'seller2',
        item: 12,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:58:18',
        updated_at: '2022-05-18 21:40:38'
      },
      {
        id: 214,
        user_id: 1,
        date: '2020-11-03',
        customer: 'mix',
        seller: 'seller2',
        item: 24,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:58:32',
        updated_at: '2022-05-18 21:40:28'
      },
      {
        id: 215,
        user_id: 1,
        date: '2020-11-05',
        customer: 'mix',
        seller: 'seller2',
        item: 21,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:58:48',
        updated_at: '2022-05-18 21:40:18'
      },
      {
        id: 216,
        user_id: 1,
        date: '2020-11-06',
        customer: 'mix',
        seller: 'seller2',
        item: 12,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:59:03',
        updated_at: '2022-05-18 21:40:08'
      },
      {
        id: 217,
        user_id: 1,
        date: '2020-11-07',
        customer: 'mix',
        seller: 'seller2',
        item: 19,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:59:19',
        updated_at: '2022-05-18 21:39:58'
      },
      {
        id: 218,
        user_id: 1,
        date: '2020-11-08',
        customer: 'mix',
        seller: 'seller2',
        item: 14,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:59:38',
        updated_at: '2022-05-18 21:39:47'
      },
      {
        id: 219,
        user_id: 1,
        date: '2020-11-09',
        customer: 'mix',
        seller: 'seller2',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 13:59:53',
        updated_at: '2022-05-18 21:39:36'
      },
      {
        id: 220,
        user_id: 1,
        date: '2020-11-10',
        customer: 'mix',
        seller: 'seller2',
        item: 8,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:00:07',
        updated_at: '2022-05-18 21:39:26'
      },
      {
        id: 221,
        user_id: 1,
        date: '2020-11-11',
        customer: 'mix',
        seller: 'seller2',
        item: 18,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:00:29',
        updated_at: '2022-05-18 21:38:56'
      },
      {
        id: 222,
        user_id: 1,
        date: '2020-11-13',
        customer: 'mix',
        seller: 'seller2',
        item: 32,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:00:56',
        updated_at: '2022-05-18 21:38:46'
      },
      {
        id: 223,
        user_id: 1,
        date: '2020-11-14',
        customer: 'mix',
        seller: 'seller2',
        item: 7,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:01:15',
        updated_at: '2022-05-18 21:38:37'
      },
      {
        id: 224,
        user_id: 1,
        date: '2020-11-15',
        customer: 'mix',
        seller: 'seller2',
        item: 45,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:01:30',
        updated_at: '2022-04-12 20:17:07'
      },
      {
        id: 225,
        user_id: 1,
        date: '2020-11-17',
        customer: 'mix',
        seller: 'seller2',
        item: 20,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:01:59',
        updated_at: '2021-12-20 14:01:59'
      },
      {
        id: 226,
        user_id: 1,
        date: '2020-11-18',
        customer: 'mix',
        seller: 'seller2',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:02:16',
        updated_at: '2021-12-20 14:02:16'
      },
      {
        id: 227,
        user_id: 1,
        date: '2020-11-19',
        customer: 'mix',
        seller: 'seller2',
        item: 13,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:02:31',
        updated_at: '2021-12-20 14:02:31'
      },
      {
        id: 228,
        user_id: 1,
        date: '2020-11-20',
        customer: 'mix',
        seller: 'seller2',
        item: 16,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:02:42',
        updated_at: '2021-12-20 14:02:42'
      },
      {
        id: 229,
        user_id: 1,
        date: '2020-11-21',
        customer: 'mix',
        seller: 'seller2',
        item: 18,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:02:55',
        updated_at: '2022-05-18 21:24:06'
      },
      {
        id: 230,
        user_id: 1,
        date: '2020-11-23',
        customer: 'mix',
        seller: 'seller2',
        item: 26,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:03:10',
        updated_at: '2022-05-18 21:38:13'
      },
      {
        id: 231,
        user_id: 1,
        date: '2020-11-24',
        customer: 'mix',
        seller: 'seller2',
        item: 28,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:03:25',
        updated_at: '2022-05-18 21:37:49'
      },
      {
        id: 232,
        user_id: 1,
        date: '2020-11-25',
        customer: 'mix',
        seller: 'seller2',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:03:42',
        updated_at: '2022-05-18 21:37:39'
      },
      {
        id: 233,
        user_id: 1,
        date: '2020-11-26',
        customer: 'mix',
        seller: 'seller2',
        item: 14,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:03:59',
        updated_at: '2022-05-18 21:37:31'
      },
      {
        id: 234,
        user_id: 1,
        date: '2020-11-27',
        customer: 'mix',
        seller: 'seller2',
        item: 19,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:04:11',
        updated_at: '2022-05-18 21:37:22'
      },
      {
        id: 235,
        user_id: 1,
        date: '2020-11-29',
        customer: 'mix',
        seller: 'seller2',
        item: 14,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:04:35',
        updated_at: '2022-05-18 21:37:11'
      },
      {
        id: 236,
        user_id: 1,
        date: '2020-11-30',
        customer: 'mix',
        seller: 'seller2',
        item: 9,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:04:52',
        updated_at: '2022-05-18 21:36:57'
      },
      {
        id: 237,
        user_id: 1,
        date: '2020-12-01',
        customer: 'mix',
        seller: 'station',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:07:05',
        updated_at: '2021-12-20 14:07:05'
      },
      {
        id: 238,
        user_id: 1,
        date: '2020-12-01',
        customer: 'mix',
        seller: 'seller1',
        item: 3,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:07:23',
        updated_at: '2021-12-20 14:07:23'
      },
      {
        id: 239,
        user_id: 1,
        date: '2020-12-01',
        customer: 'mix',
        seller: 'seller2',
        item: 16,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:07:37',
        updated_at: '2022-05-18 21:36:48'
      },
      {
        id: 240,
        user_id: 1,
        date: '2020-12-02',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:07:58',
        updated_at: '2021-12-20 14:07:58'
      },
      {
        id: 241,
        user_id: 1,
        date: '2020-12-03',
        customer: 'mix',
        seller: 'seller1',
        item: 2,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:08:18',
        updated_at: '2021-12-20 14:08:18'
      },
      {
        id: 242,
        user_id: 1,
        date: '2020-12-03',
        customer: 'mix',
        seller: 'seller2',
        item: 31,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:08:32',
        updated_at: '2022-05-18 21:36:39'
      },
      {
        id: 243,
        user_id: 1,
        date: '2020-12-03',
        customer: 'mix',
        seller: 'station',
        item: 3,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:08:42',
        updated_at: '2021-12-20 14:08:42'
      },
      {
        id: 244,
        user_id: 1,
        date: '2020-12-04',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:08:58',
        updated_at: '2021-12-20 14:08:58'
      },
      {
        id: 245,
        user_id: 1,
        date: '2020-12-04',
        customer: 'mix',
        seller: 'seller2',
        item: 16,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:09:16',
        updated_at: '2022-05-18 21:36:28'
      },
      {
        id: 246,
        user_id: 1,
        date: '2020-12-05',
        customer: 'mix',
        seller: 'seller2',
        item: 20,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:09:32',
        updated_at: '2022-05-18 21:36:20'
      },
      {
        id: 247,
        user_id: 1,
        date: '2020-12-05',
        customer: 'mix',
        seller: 'seller1',
        item: 11,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:10:04',
        updated_at: '2021-12-20 14:10:04'
      },
      {
        id: 248,
        user_id: 1,
        date: '2020-12-06',
        customer: 'mix',
        seller: 'seller2',
        item: 17,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:10:14',
        updated_at: '2022-05-18 21:36:11'
      },
      {
        id: 249,
        user_id: 1,
        date: '2020-12-06',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:10:47',
        updated_at: '2021-12-20 14:12:13'
      },
      {
        id: 250,
        user_id: 1,
        date: '2020-12-07',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:12:56',
        updated_at: '2021-12-20 14:12:56'
      },
      {
        id: 251,
        user_id: 1,
        date: '2020-12-07',
        customer: 'mix',
        seller: 'seller2',
        item: 14,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:13:08',
        updated_at: '2022-05-18 21:36:01'
      },
      {
        id: 252,
        user_id: 1,
        date: '2020-12-08',
        customer: 'mix',
        seller: 'seller2',
        item: 8,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:13:28',
        updated_at: '2022-05-18 21:35:52'
      },
      {
        id: 253,
        user_id: 1,
        date: '2020-12-08',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:13:40',
        updated_at: '2021-12-20 14:13:40'
      },
      {
        id: 254,
        user_id: 1,
        date: '2020-12-08',
        customer: 'mix',
        seller: 'station',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:13:52',
        updated_at: '2021-12-20 14:13:52'
      },
      {
        id: 255,
        user_id: 1,
        date: '2020-12-09',
        customer: 'mix',
        seller: 'station',
        item: 16,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:14:12',
        updated_at: '2021-12-20 14:14:12'
      },
      {
        id: 256,
        user_id: 1,
        date: '2020-12-09',
        customer: 'mix',
        seller: 'seller1',
        item: 16,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:14:24',
        updated_at: '2021-12-20 14:14:24'
      },
      {
        id: 257,
        user_id: 1,
        date: '2020-12-09',
        customer: 'mix',
        seller: 'seller2',
        item: 25,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:14:40',
        updated_at: '2022-05-18 21:35:42'
      },
      {
        id: 258,
        user_id: 1,
        date: '2020-12-10',
        customer: 'mix',
        seller: 'seller2',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:14:59',
        updated_at: '2022-05-18 21:35:33'
      },
      {
        id: 259,
        user_id: 1,
        date: '2020-12-10',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:15:10',
        updated_at: '2021-12-20 14:15:10'
      },
      {
        id: 260,
        user_id: 1,
        date: '2020-12-11',
        customer: 'mix',
        seller: 'seller1',
        item: 2,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:15:56',
        updated_at: '2021-12-20 14:15:56'
      },
      {
        id: 261,
        user_id: 1,
        date: '2020-12-11',
        customer: 'mix',
        seller: 'seller2',
        item: 7,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:16:06',
        updated_at: '2022-05-18 21:35:25'
      },
      {
        id: 262,
        user_id: 1,
        date: '2020-12-12',
        customer: 'mix',
        seller: 'station',
        item: 3,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:16:28',
        updated_at: '2021-12-20 14:16:28'
      },
      {
        id: 263,
        user_id: 1,
        date: '2020-12-12',
        customer: 'mix',
        seller: 'seller1',
        item: 16,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:16:42',
        updated_at: '2021-12-20 14:16:42'
      },
      {
        id: 264,
        user_id: 1,
        date: '2020-12-12',
        customer: 'mix',
        seller: 'seller2',
        item: 18,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:16:53',
        updated_at: '2022-05-18 21:35:13'
      },
      {
        id: 265,
        user_id: 1,
        date: '2020-12-13',
        customer: 'mix',
        seller: 'seller2',
        item: 14,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:18:07',
        updated_at: '2022-05-18 21:35:05'
      },
      {
        id: 266,
        user_id: 1,
        date: '2020-12-13',
        customer: 'mix',
        seller: 'seller1',
        item: 9,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:18:22',
        updated_at: '2021-12-20 14:18:22'
      },
      {
        id: 267,
        user_id: 1,
        date: '2020-12-14',
        customer: 'mix',
        seller: 'seller1',
        item: 15,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:18:56',
        updated_at: '2021-12-20 14:18:56'
      },
      {
        id: 268,
        user_id: 1,
        date: '2020-12-15',
        customer: 'mix',
        seller: 'seller2',
        item: 17,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:19:14',
        updated_at: '2022-05-18 21:34:54'
      },
      {
        id: 269,
        user_id: 1,
        date: '2020-12-16',
        customer: 'mix',
        seller: 'seller2',
        item: 32,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:19:30',
        updated_at: '2022-05-18 21:34:46'
      },
      {
        id: 270,
        user_id: 1,
        date: '2020-12-16',
        customer: 'mix',
        seller: 'seller1',
        item: 18,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:19:47',
        updated_at: '2021-12-20 14:19:47'
      },
      {
        id: 271,
        user_id: 1,
        date: '2020-12-17',
        customer: 'mix',
        seller: 'station',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:20:11',
        updated_at: '2021-12-20 14:20:11'
      },
      {
        id: 272,
        user_id: 1,
        date: '2020-12-17',
        customer: 'mix',
        seller: 'seller2',
        item: 24,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:20:28',
        updated_at: '2022-05-18 21:34:35'
      },
      {
        id: 273,
        user_id: 1,
        date: '2020-12-18',
        customer: 'mix',
        seller: 'seller1',
        item: 9,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:20:45',
        updated_at: '2021-12-20 14:20:45'
      },
      {
        id: 274,
        user_id: 1,
        date: '2020-12-18',
        customer: 'mix',
        seller: 'seller2',
        item: 20,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:21:07',
        updated_at: '2022-05-18 21:34:18'
      },
      {
        id: 275,
        user_id: 1,
        date: '2020-12-19',
        customer: 'mix',
        seller: 'seller2',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:21:54',
        updated_at: '2022-05-18 21:24:43'
      },
      {
        id: 276,
        user_id: 1,
        date: '2020-12-19',
        customer: 'mix',
        seller: 'station',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:22:08',
        updated_at: '2021-12-20 14:22:08'
      },
      {
        id: 277,
        user_id: 1,
        date: '2020-12-19',
        customer: 'mix',
        seller: 'seller1',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:22:24',
        updated_at: '2021-12-20 14:22:24'
      },
      {
        id: 278,
        user_id: 1,
        date: '2020-12-20',
        customer: 'mix',
        seller: 'seller1',
        item: 14,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:23:39',
        updated_at: '2021-12-20 14:23:39'
      },
      {
        id: 279,
        user_id: 1,
        date: '2020-12-20',
        customer: 'mix',
        seller: 'station',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:23:51',
        updated_at: '2021-12-20 14:23:51'
      },
      {
        id: 280,
        user_id: 1,
        date: '2020-12-21',
        customer: 'mix',
        seller: 'seller1',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:24:05',
        updated_at: '2021-12-20 14:24:05'
      },
      {
        id: 281,
        user_id: 1,
        date: '2020-12-21',
        customer: 'mix',
        seller: 'seller2',
        item: 9,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:24:20',
        updated_at: '2022-05-18 21:34:07'
      },
      {
        id: 282,
        user_id: 1,
        date: '2020-12-22',
        customer: 'mix',
        seller: 'seller2',
        item: 30,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:24:37',
        updated_at: '2022-05-18 21:33:58'
      },
      {
        id: 283,
        user_id: 1,
        date: '2020-12-22',
        customer: 'mix',
        seller: 'seller1',
        item: 14,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:25:00',
        updated_at: '2021-12-20 14:25:00'
      },
      {
        id: 284,
        user_id: 1,
        date: '2020-12-23',
        customer: 'mix',
        seller: 'seller1',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:25:15',
        updated_at: '2021-12-20 14:25:15'
      },
      {
        id: 285,
        user_id: 1,
        date: '2020-12-23',
        customer: 'mix',
        seller: 'seller2',
        item: 26,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:25:42',
        updated_at: '2022-05-18 21:33:49'
      },
      {
        id: 286,
        user_id: 1,
        date: '2020-12-23',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:25:53',
        updated_at: '2021-12-20 14:25:53'
      },
      {
        id: 287,
        user_id: 1,
        date: '2020-12-24',
        customer: 'mix',
        seller: 'station',
        item: 7,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:26:38',
        updated_at: '2021-12-20 14:26:38'
      },
      {
        id: 288,
        user_id: 1,
        date: '2020-12-24',
        customer: 'mix',
        seller: 'seller1',
        item: 11,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:26:56',
        updated_at: '2021-12-20 14:26:56'
      },
      {
        id: 289,
        user_id: 1,
        date: '2020-12-24',
        customer: 'mix',
        seller: 'seller2',
        item: 32,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:27:10',
        updated_at: '2022-05-18 21:33:37'
      },
      {
        id: 290,
        user_id: 1,
        date: '2020-12-25',
        customer: 'mix',
        seller: 'seller2',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:27:35',
        updated_at: '2022-05-18 21:33:21'
      },
      {
        id: 291,
        user_id: 1,
        date: '2020-12-25',
        customer: 'mix',
        seller: 'seller1',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:27:51',
        updated_at: '2021-12-20 14:27:51'
      },
      {
        id: 292,
        user_id: 1,
        date: '2020-12-25',
        customer: 'mix',
        seller: 'station',
        item: 21,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:28:08',
        updated_at: '2021-12-20 14:28:08'
      },
      {
        id: 293,
        user_id: 1,
        date: '2020-12-26',
        customer: 'mix',
        seller: 'station',
        item: 13,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:28:25',
        updated_at: '2021-12-20 14:31:24'
      },
      {
        id: 294,
        user_id: 1,
        date: '2020-12-26',
        customer: 'mix',
        seller: 'seller1',
        item: 9,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:28:39',
        updated_at: '2021-12-20 14:31:53'
      },
      {
        id: 295,
        user_id: 1,
        date: '2020-12-26',
        customer: 'mix',
        seller: 'seller2',
        item: 14,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:29:00',
        updated_at: '2022-05-18 21:33:12'
      },
      {
        id: 296,
        user_id: 1,
        date: '2020-12-27',
        customer: 'mix',
        seller: 'seller1',
        item: 7,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:32:54',
        updated_at: '2021-12-20 14:44:35'
      },
      {
        id: 297,
        user_id: 1,
        date: '2020-12-28',
        customer: 'mix',
        seller: 'seller1',
        item: 7,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:33:15',
        updated_at: '2021-12-20 14:33:15'
      },
      {
        id: 298,
        user_id: 1,
        date: '2020-12-28',
        customer: 'mix',
        seller: 'seller2',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:33:38',
        updated_at: '2022-05-18 21:33:02'
      },
      {
        id: 299,
        user_id: 1,
        date: '2020-12-28',
        customer: 'mix',
        seller: 'station',
        item: 3,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:33:57',
        updated_at: '2021-12-20 14:33:57'
      },
      {
        id: 300,
        user_id: 1,
        date: '2020-12-29',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:34:20',
        updated_at: '2021-12-20 14:34:20'
      },
      {
        id: 301,
        user_id: 1,
        date: '2020-12-29',
        customer: 'mix',
        seller: 'seller2',
        item: 23,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:34:40',
        updated_at: '2022-05-18 21:32:53'
      },
      {
        id: 302,
        user_id: 1,
        date: '2020-12-29',
        customer: 'mix',
        seller: 'seller1',
        item: 7,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:34:51',
        updated_at: '2021-12-20 14:45:07'
      },
      {
        id: 304,
        user_id: 1,
        date: '2020-12-30',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:35:33',
        updated_at: '2021-12-20 14:35:33'
      },
      {
        id: 305,
        user_id: 1,
        date: '2020-12-30',
        customer: 'mix',
        seller: 'seller2',
        item: 37,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:36:18',
        updated_at: '2022-05-18 21:32:41'
      },
      {
        id: 306,
        user_id: 1,
        date: '2020-12-31',
        customer: 'mix',
        seller: 'seller2',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:36:45',
        updated_at: '2022-05-18 21:32:28'
      },
      {
        id: 307,
        user_id: 1,
        date: '2020-12-31',
        customer: 'mix',
        seller: 'seller1',
        item: 17,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:37:01',
        updated_at: '2021-12-20 14:37:01'
      },
      {
        id: 308,
        user_id: 1,
        date: '2020-12-31',
        customer: 'mix',
        seller: 'station',
        item: 7,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:37:20',
        updated_at: '2021-12-20 14:37:20'
      },
      {
        id: 309,
        user_id: 1,
        date: '2020-12-05',
        customer: 'mix',
        seller: 'station',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 14:40:22',
        updated_at: '2021-12-20 14:40:22'
      },
      {
        id: 310,
        user_id: 1,
        date: '2021-01-02',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2021-12-20 18:15:23',
        updated_at: '2021-12-20 19:36:34'
      },
      {
        id: 311,
        user_id: 1,
        date: '2021-01-02',
        customer: 'mix',
        seller: 'seller1',
        item: 7,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 18:16:30',
        updated_at: '2021-12-20 18:16:30'
      },
      {
        id: 312,
        user_id: 1,
        date: '2021-01-03',
        customer: 'mix',
        seller: 'seller1',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 18:17:00',
        updated_at: '2021-12-20 18:17:00'
      },
      {
        id: 313,
        user_id: 1,
        date: '2021-01-03',
        customer: 'mix',
        seller: 'seller2',
        item: 12,
        payments: 12,
        remarks: null,
        created_at: '2021-12-20 18:17:15',
        updated_at: '2022-04-12 20:38:13'
      },
      {
        id: 314,
        user_id: 1,
        date: '2021-01-03',
        customer: 'mix',
        seller: 'station',
        item: 3,
        payments: 3,
        remarks: null,
        created_at: '2021-12-20 18:17:30',
        updated_at: '2021-12-20 19:37:03'
      },
      {
        id: 315,
        user_id: 1,
        date: '2021-01-04',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 18:17:52',
        updated_at: '2021-12-20 18:17:52'
      },
      {
        id: 316,
        user_id: 1,
        date: '2021-01-04',
        customer: 'mix',
        seller: 'seller2',
        item: 16,
        payments: 16,
        remarks: null,
        created_at: '2021-12-20 18:18:05',
        updated_at: '2022-04-12 20:38:46'
      },
      {
        id: 317,
        user_id: 1,
        date: '2021-01-05',
        customer: 'mix',
        seller: 'seller2',
        item: 43,
        payments: 43,
        remarks: null,
        created_at: '2021-12-20 18:18:25',
        updated_at: '2022-04-12 20:39:46'
      },
      {
        id: 318,
        user_id: 1,
        date: '2021-01-05',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 18:18:40',
        updated_at: '2021-12-20 18:18:40'
      },
      {
        id: 319,
        user_id: 1,
        date: '2021-01-06',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 18:18:55',
        updated_at: '2021-12-20 18:18:55'
      },
      {
        id: 320,
        user_id: 1,
        date: '2021-01-06',
        customer: 'mix',
        seller: 'seller2',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2021-12-20 18:19:20',
        updated_at: '2022-04-12 20:40:28'
      },
      {
        id: 321,
        user_id: 1,
        date: '2021-01-07',
        customer: 'mix',
        seller: 'seller2',
        item: 38,
        payments: 38,
        remarks: null,
        created_at: '2021-12-20 18:19:44',
        updated_at: '2022-04-12 20:40:51'
      },
      {
        id: 322,
        user_id: 1,
        date: '2021-01-07',
        customer: 'mix',
        seller: 'seller1',
        item: 19,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 18:19:54',
        updated_at: '2021-12-20 18:19:54'
      },
      {
        id: 323,
        user_id: 1,
        date: '2021-01-08',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 18:20:11',
        updated_at: '2021-12-20 18:20:11'
      },
      {
        id: 324,
        user_id: 1,
        date: '2021-01-08',
        customer: 'mix',
        seller: 'seller2',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2021-12-20 18:20:22',
        updated_at: '2022-04-12 20:44:21'
      },
      {
        id: 325,
        user_id: 1,
        date: '2021-01-09',
        customer: 'mix',
        seller: 'seller1',
        item: 7,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 18:20:42',
        updated_at: '2021-12-20 18:20:42'
      },
      {
        id: 326,
        user_id: 1,
        date: '2021-01-09',
        customer: 'mix',
        seller: 'seller2',
        item: 15,
        payments: 15,
        remarks: null,
        created_at: '2021-12-20 18:21:01',
        updated_at: '2022-04-12 20:44:39'
      },
      {
        id: 327,
        user_id: 1,
        date: '2021-01-09',
        customer: 'mix',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2021-12-20 18:21:15',
        updated_at: '2021-12-20 19:37:18'
      },
      {
        id: 328,
        user_id: 1,
        date: '2021-01-10',
        customer: 'mix',
        seller: 'station',
        item: 3,
        payments: 3,
        remarks: null,
        created_at: '2021-12-20 18:21:32',
        updated_at: '2021-12-20 19:37:41'
      },
      {
        id: 329,
        user_id: 1,
        date: '2021-01-10',
        customer: 'mix',
        seller: 'seller2',
        item: 7,
        payments: 5,
        remarks: null,
        created_at: '2021-12-20 18:21:43',
        updated_at: '2022-04-12 20:44:57'
      },
      {
        id: 330,
        user_id: 1,
        date: '2021-01-11',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 18:22:02',
        updated_at: '2021-12-20 18:22:02'
      },
      {
        id: 331,
        user_id: 1,
        date: '2021-01-12',
        customer: 'mix',
        seller: 'seller1',
        item: 2,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 18:22:30',
        updated_at: '2021-12-20 18:22:30'
      },
      {
        id: 332,
        user_id: 1,
        date: '2021-01-12',
        customer: 'mix',
        seller: 'seller2',
        item: 14,
        payments: 14,
        remarks: null,
        created_at: '2021-12-20 18:22:46',
        updated_at: '2022-04-12 20:46:23'
      },
      {
        id: 333,
        user_id: 1,
        date: '2021-01-13',
        customer: 'mix',
        seller: 'seller1',
        item: 3,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 18:23:34',
        updated_at: '2021-12-20 18:23:34'
      },
      {
        id: 334,
        user_id: 1,
        date: '2021-01-13',
        customer: 'mix',
        seller: 'seller2',
        item: 15,
        payments: 15,
        remarks: null,
        created_at: '2021-12-20 18:23:49',
        updated_at: '2022-04-12 20:46:39'
      },
      {
        id: 335,
        user_id: 1,
        date: '2021-01-14',
        customer: 'mix',
        seller: 'seller2',
        item: 5,
        payments: 5,
        remarks: null,
        created_at: '2021-12-20 18:24:10',
        updated_at: '2022-04-12 20:47:35'
      },
      {
        id: 336,
        user_id: 1,
        date: '2021-01-14',
        customer: 'mix',
        seller: 'seller1',
        item: 12,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 18:24:21',
        updated_at: '2021-12-20 18:24:21'
      },
      {
        id: 337,
        user_id: 1,
        date: '2021-01-14',
        customer: 'B.Gerry ',
        seller: 'station',
        item: 14,
        payments: 14,
        remarks: null,
        created_at: '2021-12-20 18:24:44',
        updated_at: '2021-12-22 05:54:29'
      },
      {
        id: 338,
        user_id: 1,
        date: '2021-01-15',
        customer: 'mix',
        seller: 'seller1',
        item: 12,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 18:25:16',
        updated_at: '2021-12-20 18:25:16'
      },
      {
        id: 339,
        user_id: 1,
        date: '2021-01-15',
        customer: 'mix',
        seller: 'seller2',
        item: 17,
        payments: 17,
        remarks: null,
        created_at: '2021-12-20 18:25:29',
        updated_at: '2022-04-12 20:47:53'
      },
      {
        id: 340,
        user_id: 1,
        date: '2021-01-16',
        customer: 'mix',
        seller: 'seller2',
        item: 14,
        payments: 14,
        remarks: null,
        created_at: '2021-12-20 18:27:51',
        updated_at: '2022-04-12 20:48:07'
      },
      {
        id: 341,
        user_id: 1,
        date: '2021-01-16',
        customer: 'mix',
        seller: 'seller1',
        item: 13,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 18:28:01',
        updated_at: '2021-12-20 18:28:01'
      },
      {
        id: 342,
        user_id: 1,
        date: '2021-01-17',
        customer: 'mix',
        seller: 'seller1',
        item: 7,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 18:28:20',
        updated_at: '2021-12-20 18:28:20'
      },
      {
        id: 343,
        user_id: 1,
        date: '2021-01-17',
        customer: 'mix',
        seller: 'seller2',
        item: 25,
        payments: 25,
        remarks: null,
        created_at: '2021-12-20 18:28:37',
        updated_at: '2022-04-12 20:48:21'
      },
      {
        id: 344,
        user_id: 1,
        date: '2021-01-18',
        customer: 'mix',
        seller: 'seller1',
        item: 1,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 18:29:10',
        updated_at: '2021-12-20 18:29:10'
      },
      {
        id: 345,
        user_id: 1,
        date: '2021-01-18',
        customer: 'mix',
        seller: 'seller2',
        item: 20,
        payments: 20,
        remarks: null,
        created_at: '2021-12-20 18:29:29',
        updated_at: '2022-04-12 20:48:39'
      },
      {
        id: 346,
        user_id: 1,
        date: '2021-01-19',
        customer: 'mix',
        seller: 'seller2',
        item: 25,
        payments: 25,
        remarks: null,
        created_at: '2021-12-20 18:29:49',
        updated_at: '2022-04-12 20:49:01'
      },
      {
        id: 347,
        user_id: 1,
        date: '2021-01-19',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 18:30:04',
        updated_at: '2021-12-21 01:55:36'
      },
      {
        id: 349,
        user_id: 1,
        date: '2021-01-20',
        customer: 'mix',
        seller: 'station',
        item: 3,
        payments: 3,
        remarks: null,
        created_at: '2021-12-20 18:30:29',
        updated_at: '2021-12-20 19:38:39'
      },
      {
        id: 350,
        user_id: 1,
        date: '2021-01-20',
        customer: 'mix',
        seller: 'seller1',
        item: 2,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 18:30:59',
        updated_at: '2021-12-20 18:31:27'
      },
      {
        id: 351,
        user_id: 1,
        date: '2021-01-21',
        customer: 'mix',
        seller: 'seller1',
        item: 3,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 18:32:14',
        updated_at: '2021-12-20 18:32:14'
      },
      {
        id: 352,
        user_id: 1,
        date: '2021-01-21',
        customer: 'mix',
        seller: 'seller2',
        item: 18,
        payments: 18,
        remarks: null,
        created_at: '2021-12-20 18:32:26',
        updated_at: '2022-04-12 20:49:19'
      },
      {
        id: 353,
        user_id: 1,
        date: '2021-01-21',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2021-12-20 18:32:37',
        updated_at: '2021-12-20 19:39:02'
      },
      {
        id: 354,
        user_id: 1,
        date: '2021-01-22',
        customer: 'Lucban',
        seller: 'station',
        item: 20,
        payments: 40,
        remarks: '3paid/375php',
        created_at: '2021-12-20 18:32:57',
        updated_at: '2021-12-20 19:56:11'
      },
      {
        id: 355,
        user_id: 1,
        date: '2021-01-22',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 18:33:23',
        updated_at: '2021-12-20 18:33:23'
      },
      {
        id: 356,
        user_id: 1,
        date: '2021-01-23',
        customer: 'mix',
        seller: 'seller1',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 18:33:37',
        updated_at: '2021-12-20 18:33:37'
      },
      {
        id: 357,
        user_id: 1,
        date: '2021-01-23',
        customer: 'mix',
        seller: 'seller2',
        item: 33,
        payments: 33,
        remarks: null,
        created_at: '2021-12-20 18:33:50',
        updated_at: '2022-04-12 20:49:42'
      },
      {
        id: 358,
        user_id: 1,
        date: '2021-01-23',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2021-12-20 18:34:12',
        updated_at: '2021-12-20 19:40:19'
      },
      {
        id: 359,
        user_id: 1,
        date: '2021-01-24',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2021-12-20 18:35:08',
        updated_at: '2021-12-20 19:40:26'
      },
      {
        id: 360,
        user_id: 1,
        date: '2021-01-24',
        customer: 'mix',
        seller: 'seller2',
        item: 12,
        payments: 12,
        remarks: null,
        created_at: '2021-12-20 18:35:21',
        updated_at: '2022-04-12 20:50:00'
      },
      {
        id: 361,
        user_id: 1,
        date: '2021-01-24',
        customer: 'mix',
        seller: 'seller1',
        item: 20,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 18:35:34',
        updated_at: '2021-12-20 18:35:34'
      },
      {
        id: 362,
        user_id: 1,
        date: '2021-01-25',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 18:35:55',
        updated_at: '2021-12-20 18:35:55'
      },
      {
        id: 363,
        user_id: 1,
        date: '2021-01-25',
        customer: 'mix',
        seller: 'seller2',
        item: 25,
        payments: 25,
        remarks: null,
        created_at: '2021-12-20 18:36:10',
        updated_at: '2022-04-12 20:50:15'
      },
      {
        id: 364,
        user_id: 1,
        date: '2021-01-26',
        customer: 'mix',
        seller: 'seller1',
        item: 9,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 18:37:24',
        updated_at: '2021-12-20 18:37:24'
      },
      {
        id: 365,
        user_id: 1,
        date: '2021-01-26',
        customer: 'mix',
        seller: 'seller2',
        item: 39,
        payments: 39,
        remarks: null,
        created_at: '2021-12-20 18:37:45',
        updated_at: '2022-04-12 20:50:47'
      },
      {
        id: 366,
        user_id: 1,
        date: '2021-01-27',
        customer: 'mix',
        seller: 'seller1',
        item: 1,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 18:38:05',
        updated_at: '2021-12-20 18:38:05'
      },
      {
        id: 367,
        user_id: 1,
        date: '2021-01-27',
        customer: 'mix',
        seller: 'seller2',
        item: 29,
        payments: 29,
        remarks: null,
        created_at: '2021-12-20 18:38:18',
        updated_at: '2022-04-12 20:51:13'
      },
      {
        id: 368,
        user_id: 1,
        date: '2021-01-28',
        customer: 'mix',
        seller: 'seller2',
        item: 29,
        payments: 29,
        remarks: null,
        created_at: '2021-12-20 18:38:34',
        updated_at: '2022-04-12 20:51:31'
      },
      {
        id: 369,
        user_id: 1,
        date: '2021-01-28',
        customer: 'mix',
        seller: 'seller1',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 18:38:53',
        updated_at: '2021-12-20 18:38:53'
      },
      {
        id: 371,
        user_id: 1,
        date: '2021-01-29',
        customer: 'mix',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2021-12-20 18:39:29',
        updated_at: '2021-12-20 19:40:43'
      },
      {
        id: 372,
        user_id: 1,
        date: '2021-01-29',
        customer: 'mix',
        seller: 'seller1',
        item: 12,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 18:40:00',
        updated_at: '2021-12-20 18:40:38'
      },
      {
        id: 373,
        user_id: 1,
        date: '2021-01-29',
        customer: 'mix',
        seller: 'seller2',
        item: 10,
        payments: 9,
        remarks: null,
        created_at: '2021-12-20 18:40:18',
        updated_at: '2022-04-12 20:51:50'
      },
      {
        id: 374,
        user_id: 1,
        date: '2021-01-30',
        customer: 'mix',
        seller: 'seller2',
        item: 21,
        payments: 21,
        remarks: null,
        created_at: '2021-12-20 18:41:23',
        updated_at: '2022-04-12 20:52:07'
      },
      {
        id: 375,
        user_id: 1,
        date: '2021-01-30',
        customer: 'mix',
        seller: 'seller1',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 18:41:35',
        updated_at: '2021-12-20 18:42:18'
      },
      {
        id: 376,
        user_id: 1,
        date: '2021-01-30',
        customer: 'mix',
        seller: 'station',
        item: 6,
        payments: 6,
        remarks: null,
        created_at: '2021-12-20 18:42:46',
        updated_at: '2021-12-20 19:40:53'
      },
      {
        id: 377,
        user_id: 1,
        date: '2021-01-31',
        customer: 'B.Gerry ',
        seller: 'station',
        item: 18,
        payments: 18,
        remarks: null,
        created_at: '2021-12-20 18:43:21',
        updated_at: '2022-07-14 17:02:38'
      },
      {
        id: 378,
        user_id: 1,
        date: '2021-01-31',
        customer: 'mix',
        seller: 'seller1',
        item: 9,
        payments: 0,
        remarks: null,
        created_at: '2021-12-20 18:43:34',
        updated_at: '2021-12-20 18:43:34'
      },
      {
        id: 379,
        user_id: 1,
        date: '2021-01-31',
        customer: 'mix',
        seller: 'seller2',
        item: 14,
        payments: 14,
        remarks: null,
        created_at: '2021-12-20 18:43:47',
        updated_at: '2022-04-12 20:52:17'
      },
      {
        id: 380,
        user_id: 1,
        date: '2021-01-03',
        customer: 'Lucban',
        seller: 'station',
        item: 30,
        payments: 0,
        remarks: 'start',
        created_at: '2021-12-20 19:16:37',
        updated_at: '2021-12-20 19:16:37'
      },
      {
        id: 382,
        user_id: 1,
        date: '2021-01-17',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2021-12-20 19:55:14',
        updated_at: '2021-12-20 19:55:38'
      },
      {
        id: 383,
        user_id: 1,
        date: '2021-02-01',
        customer: 'mix',
        seller: 'seller1',
        item: 23,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 01:29:14',
        updated_at: '2021-12-21 01:29:14'
      },
      {
        id: 384,
        user_id: 1,
        date: '2021-02-01',
        customer: 'mix',
        seller: 'seller2',
        item: 5,
        payments: 5,
        remarks: null,
        created_at: '2021-12-21 01:29:28',
        updated_at: '2022-04-12 21:02:54'
      },
      {
        id: 385,
        user_id: 1,
        date: '2021-02-02',
        customer: 'mix',
        seller: 'seller2',
        item: 34,
        payments: 34,
        remarks: null,
        created_at: '2021-12-21 01:29:52',
        updated_at: '2022-04-12 21:03:13'
      },
      {
        id: 386,
        user_id: 1,
        date: '2021-02-02',
        customer: 'mix',
        seller: 'seller1',
        item: 1,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 01:30:14',
        updated_at: '2021-12-21 01:30:14'
      },
      {
        id: 387,
        user_id: 1,
        date: '2021-02-03',
        customer: 'mix',
        seller: 'seller1',
        item: 7,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 01:30:36',
        updated_at: '2021-12-21 01:30:36'
      },
      {
        id: 388,
        user_id: 1,
        date: '2021-02-03',
        customer: 'mix',
        seller: 'seller2',
        item: 15,
        payments: 15,
        remarks: null,
        created_at: '2021-12-21 01:30:54',
        updated_at: '2022-04-12 21:03:38'
      },
      {
        id: 389,
        user_id: 1,
        date: '2021-02-04',
        customer: 'mix',
        seller: 'seller2',
        item: 59,
        payments: 59,
        remarks: null,
        created_at: '2021-12-21 01:31:23',
        updated_at: '2022-04-12 21:04:01'
      },
      {
        id: 390,
        user_id: 1,
        date: '2021-02-04',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 01:31:41',
        updated_at: '2021-12-21 01:31:41'
      },
      {
        id: 391,
        user_id: 1,
        date: '2021-02-05',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 01:31:59',
        updated_at: '2021-12-21 01:31:59'
      },
      {
        id: 392,
        user_id: 1,
        date: '2021-02-05',
        customer: 'mix',
        seller: 'seller2',
        item: 15,
        payments: 15,
        remarks: null,
        created_at: '2021-12-21 01:32:12',
        updated_at: '2022-04-12 21:04:17'
      },
      {
        id: 393,
        user_id: 1,
        date: '2021-02-06',
        customer: 'mix',
        seller: 'seller2',
        item: 34,
        payments: 34,
        remarks: null,
        created_at: '2021-12-21 01:32:32',
        updated_at: '2022-04-12 21:04:37'
      },
      {
        id: 394,
        user_id: 1,
        date: '2021-02-07',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 01:33:32',
        updated_at: '2021-12-21 01:33:32'
      },
      {
        id: 395,
        user_id: 1,
        date: '2021-02-07',
        customer: 'mix',
        seller: 'seller2',
        item: 3,
        payments: 3,
        remarks: null,
        created_at: '2021-12-21 01:33:49',
        updated_at: '2022-04-12 21:04:57'
      },
      {
        id: 396,
        user_id: 1,
        date: '2021-02-08',
        customer: 'mix',
        seller: 'seller2',
        item: 41,
        payments: 41,
        remarks: null,
        created_at: '2021-12-21 01:34:11',
        updated_at: '2022-04-12 21:05:16'
      },
      {
        id: 397,
        user_id: 1,
        date: '2021-02-08',
        customer: 'mix',
        seller: 'seller1',
        item: 3,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 01:34:28',
        updated_at: '2021-12-21 01:34:28'
      },
      {
        id: 398,
        user_id: 1,
        date: '2021-02-09',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 01:34:43',
        updated_at: '2021-12-21 01:34:43'
      },
      {
        id: 399,
        user_id: 1,
        date: '2021-02-09',
        customer: 'mix',
        seller: 'seller2',
        item: 17,
        payments: 17,
        remarks: null,
        created_at: '2021-12-21 01:34:56',
        updated_at: '2022-04-12 21:05:32'
      },
      {
        id: 400,
        user_id: 1,
        date: '2021-02-10',
        customer: 'mix',
        seller: 'seller2',
        item: 9,
        payments: 9,
        remarks: null,
        created_at: '2021-12-21 01:35:19',
        updated_at: '2022-04-12 21:06:16'
      },
      {
        id: 401,
        user_id: 1,
        date: '2021-02-10',
        customer: 'mix',
        seller: 'seller1',
        item: 16,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 01:35:35',
        updated_at: '2021-12-21 01:35:35'
      },
      {
        id: 402,
        user_id: 1,
        date: '2021-02-11',
        customer: 'mix',
        seller: 'seller1',
        item: 3,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 01:36:05',
        updated_at: '2021-12-21 01:36:05'
      },
      {
        id: 403,
        user_id: 1,
        date: '2021-02-11',
        customer: 'mix',
        seller: 'seller2',
        item: 19,
        payments: 19,
        remarks: null,
        created_at: '2021-12-21 01:36:18',
        updated_at: '2022-04-12 21:06:46'
      },
      {
        id: 404,
        user_id: 1,
        date: '2021-02-12',
        customer: 'mix',
        seller: 'seller2',
        item: 36,
        payments: 36,
        remarks: null,
        created_at: '2021-12-21 01:36:46',
        updated_at: '2022-04-12 21:07:21'
      },
      {
        id: 405,
        user_id: 1,
        date: '2021-02-12',
        customer: 'mix',
        seller: 'seller1',
        item: 14,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 01:37:02',
        updated_at: '2021-12-21 01:37:02'
      },
      {
        id: 406,
        user_id: 1,
        date: '2021-02-13',
        customer: 'mix',
        seller: 'seller1',
        item: 8,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 01:37:24',
        updated_at: '2021-12-21 01:37:24'
      },
      {
        id: 407,
        user_id: 1,
        date: '2021-02-13',
        customer: 'mix',
        seller: 'seller2',
        item: 38,
        payments: 45,
        remarks: null,
        created_at: '2021-12-21 01:37:41',
        updated_at: '2022-04-12 21:07:55'
      },
      {
        id: 408,
        user_id: 1,
        date: '2021-02-14',
        customer: 'mix',
        seller: 'seller2',
        item: 7,
        payments: 7,
        remarks: null,
        created_at: '2021-12-21 01:38:16',
        updated_at: '2022-04-12 21:08:06'
      },
      {
        id: 409,
        user_id: 1,
        date: '2021-02-14',
        customer: 'mix',
        seller: 'seller1',
        item: 9,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 01:38:27',
        updated_at: '2021-12-21 01:38:27'
      },
      {
        id: 410,
        user_id: 1,
        date: '2021-02-15',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 01:38:49',
        updated_at: '2021-12-21 01:38:49'
      },
      {
        id: 411,
        user_id: 1,
        date: '2021-02-15',
        customer: 'mix',
        seller: 'seller2',
        item: 37,
        payments: 37,
        remarks: null,
        created_at: '2021-12-21 01:39:04',
        updated_at: '2022-04-12 21:08:22'
      },
      {
        id: 412,
        user_id: 1,
        date: '2021-02-16',
        customer: 'mix',
        seller: 'seller2',
        item: 21,
        payments: 21,
        remarks: null,
        created_at: '2021-12-21 01:40:30',
        updated_at: '2022-04-12 21:08:41'
      },
      {
        id: 413,
        user_id: 1,
        date: '2021-02-16',
        customer: 'mix',
        seller: 'seller1',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 01:40:50',
        updated_at: '2021-12-21 01:40:50'
      },
      {
        id: 414,
        user_id: 1,
        date: '2021-02-17',
        customer: 'mix',
        seller: 'seller1',
        item: 25,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 01:41:07',
        updated_at: '2021-12-21 01:42:03'
      },
      {
        id: 415,
        user_id: 1,
        date: '2021-02-17',
        customer: 'mix',
        seller: 'seller2',
        item: 27,
        payments: 27,
        remarks: null,
        created_at: '2021-12-21 01:41:16',
        updated_at: '2022-04-12 21:08:58'
      },
      {
        id: 416,
        user_id: 1,
        date: '2021-02-18',
        customer: 'mix',
        seller: 'seller2',
        item: 32,
        payments: 32,
        remarks: null,
        created_at: '2021-12-21 01:42:42',
        updated_at: '2022-04-12 21:09:15'
      },
      {
        id: 417,
        user_id: 1,
        date: '2021-02-18',
        customer: 'mix',
        seller: 'seller1',
        item: 1,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 01:42:57',
        updated_at: '2021-12-21 01:42:57'
      },
      {
        id: 418,
        user_id: 1,
        date: '2021-02-19',
        customer: 'mix',
        seller: 'seller1',
        item: 7,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 01:43:12',
        updated_at: '2021-12-21 01:43:12'
      },
      {
        id: 419,
        user_id: 1,
        date: '2021-02-19',
        customer: 'mix',
        seller: 'seller2',
        item: 31,
        payments: 31,
        remarks: null,
        created_at: '2021-12-21 01:43:25',
        updated_at: '2022-04-12 21:09:31'
      },
      {
        id: 420,
        user_id: 1,
        date: '2021-02-20',
        customer: 'mix',
        seller: 'seller2',
        item: 14,
        payments: 14,
        remarks: null,
        created_at: '2021-12-21 01:43:51',
        updated_at: '2022-04-12 21:09:44'
      },
      {
        id: 421,
        user_id: 1,
        date: '2021-02-21',
        customer: 'mix',
        seller: 'seller2',
        item: 40,
        payments: 40,
        remarks: null,
        created_at: '2021-12-21 01:44:14',
        updated_at: '2022-04-12 21:10:06'
      },
      {
        id: 422,
        user_id: 1,
        date: '2021-02-21',
        customer: 'mix',
        seller: 'seller1',
        item: 12,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 01:44:33',
        updated_at: '2021-12-21 01:44:33'
      },
      {
        id: 423,
        user_id: 1,
        date: '2021-02-22',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 01:44:50',
        updated_at: '2021-12-21 01:44:50'
      },
      {
        id: 424,
        user_id: 1,
        date: '2021-02-22',
        customer: 'mix',
        seller: 'seller2',
        item: 8,
        payments: 8,
        remarks: null,
        created_at: '2021-12-21 01:45:02',
        updated_at: '2022-04-12 21:10:19'
      },
      {
        id: 425,
        user_id: 1,
        date: '2021-02-23',
        customer: 'mix',
        seller: 'seller2',
        item: 16,
        payments: 16,
        remarks: null,
        created_at: '2021-12-21 01:45:14',
        updated_at: '2022-04-12 21:10:35'
      },
      {
        id: 426,
        user_id: 1,
        date: '2021-02-23',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 01:45:27',
        updated_at: '2021-12-21 01:45:27'
      },
      {
        id: 427,
        user_id: 1,
        date: '2021-02-24',
        customer: 'mix',
        seller: 'seller1',
        item: 7,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 01:45:39',
        updated_at: '2021-12-21 01:45:39'
      },
      {
        id: 428,
        user_id: 1,
        date: '2021-02-24',
        customer: 'mix',
        seller: 'seller2',
        item: 29,
        payments: 29,
        remarks: null,
        created_at: '2021-12-21 01:45:52',
        updated_at: '2022-04-12 21:10:58'
      },
      {
        id: 429,
        user_id: 1,
        date: '2021-02-25',
        customer: 'mix',
        seller: 'seller2',
        item: 34,
        payments: 34,
        remarks: null,
        created_at: '2021-12-21 01:46:06',
        updated_at: '2022-04-12 21:11:24'
      },
      {
        id: 430,
        user_id: 1,
        date: '2021-02-25',
        customer: 'mix',
        seller: 'seller1',
        item: 14,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 01:46:18',
        updated_at: '2021-12-21 01:46:18'
      },
      {
        id: 431,
        user_id: 1,
        date: '2021-02-26',
        customer: 'mix',
        seller: 'seller1',
        item: 11,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 01:46:32',
        updated_at: '2021-12-21 01:46:32'
      },
      {
        id: 432,
        user_id: 1,
        date: '2021-02-26',
        customer: 'mix',
        seller: 'seller2',
        item: 22,
        payments: 22,
        remarks: null,
        created_at: '2021-12-21 01:46:45',
        updated_at: '2022-04-12 21:11:37'
      },
      {
        id: 433,
        user_id: 1,
        date: '2021-02-27',
        customer: 'mix',
        seller: 'seller2',
        item: 39,
        payments: 39,
        remarks: null,
        created_at: '2021-12-21 01:47:11',
        updated_at: '2022-04-12 21:11:56'
      },
      {
        id: 434,
        user_id: 1,
        date: '2021-02-27',
        customer: 'mix',
        seller: 'seller1',
        item: 8,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 01:47:29',
        updated_at: '2021-12-21 01:47:29'
      },
      {
        id: 435,
        user_id: 1,
        date: '2021-02-28',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 01:47:45',
        updated_at: '2021-12-21 01:47:45'
      },
      {
        id: 436,
        user_id: 1,
        date: '2021-02-28',
        customer: 'mix',
        seller: 'seller2',
        item: 28,
        payments: 28,
        remarks: null,
        created_at: '2021-12-21 01:48:02',
        updated_at: '2022-04-12 21:12:14'
      },
      {
        id: 437,
        user_id: 1,
        date: '2021-03-01',
        customer: 'mix',
        seller: 'seller1',
        item: 9,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:01:31',
        updated_at: '2021-12-21 02:01:31'
      },
      {
        id: 438,
        user_id: 1,
        date: '2021-03-01',
        customer: 'mix',
        seller: 'seller2',
        item: 42,
        payments: 42,
        remarks: null,
        created_at: '2021-12-21 02:04:31',
        updated_at: '2022-04-12 21:34:54'
      },
      {
        id: 439,
        user_id: 1,
        date: '2021-03-02',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:18:25',
        updated_at: '2021-12-21 02:18:25'
      },
      {
        id: 440,
        user_id: 1,
        date: '2021-03-02',
        customer: 'mix',
        seller: 'seller2',
        item: 49,
        payments: 49,
        remarks: null,
        created_at: '2021-12-21 02:20:06',
        updated_at: '2022-04-12 21:35:12'
      },
      {
        id: 441,
        user_id: 1,
        date: '2021-03-03',
        customer: 'mix',
        seller: 'seller1',
        item: 23,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:25:28',
        updated_at: '2021-12-21 02:25:28'
      },
      {
        id: 442,
        user_id: 1,
        date: '2021-03-03',
        customer: 'mix',
        seller: 'seller2',
        item: 34,
        payments: 34,
        remarks: null,
        created_at: '2021-12-21 02:25:45',
        updated_at: '2022-04-12 21:35:27'
      },
      {
        id: 443,
        user_id: 1,
        date: '2021-03-04',
        customer: 'mix',
        seller: 'seller2',
        item: 21,
        payments: 21,
        remarks: null,
        created_at: '2021-12-21 02:25:59',
        updated_at: '2022-04-12 21:35:44'
      },
      {
        id: 444,
        user_id: 1,
        date: '2021-03-04',
        customer: 'mix',
        seller: 'seller1',
        item: 7,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:26:12',
        updated_at: '2021-12-21 02:26:12'
      },
      {
        id: 445,
        user_id: 1,
        date: '2021-03-05',
        customer: 'mix',
        seller: 'seller1',
        item: 1,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:26:33',
        updated_at: '2021-12-21 02:26:33'
      },
      {
        id: 446,
        user_id: 1,
        date: '2021-03-05',
        customer: 'mix',
        seller: 'seller2',
        item: 48,
        payments: 48,
        remarks: null,
        created_at: '2021-12-21 02:27:00',
        updated_at: '2022-04-12 21:36:05'
      },
      {
        id: 447,
        user_id: 1,
        date: '2021-03-06',
        customer: 'mix',
        seller: 'seller2',
        item: 44,
        payments: 44,
        remarks: null,
        created_at: '2021-12-21 02:27:17',
        updated_at: '2022-04-12 21:37:00'
      },
      {
        id: 448,
        user_id: 1,
        date: '2021-03-06',
        customer: 'mix',
        seller: 'seller1',
        item: 9,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:27:31',
        updated_at: '2021-12-21 02:27:31'
      },
      {
        id: 449,
        user_id: 1,
        date: '2021-03-07',
        customer: 'mix',
        seller: 'seller1',
        item: 23,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:28:50',
        updated_at: '2021-12-21 02:28:50'
      },
      {
        id: 450,
        user_id: 1,
        date: '2021-03-07',
        customer: 'mix',
        seller: 'seller2',
        item: 23,
        payments: 23,
        remarks: null,
        created_at: '2021-12-21 02:28:59',
        updated_at: '2022-04-12 21:37:48'
      },
      {
        id: 451,
        user_id: 1,
        date: '2021-03-08',
        customer: 'mix',
        seller: 'seller2',
        item: 20,
        payments: 20,
        remarks: null,
        created_at: '2021-12-21 02:29:16',
        updated_at: '2022-04-12 21:38:06'
      },
      {
        id: 452,
        user_id: 1,
        date: '2021-03-08',
        customer: 'mix',
        seller: 'seller1',
        item: 24,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:29:33',
        updated_at: '2021-12-21 02:29:33'
      },
      {
        id: 453,
        user_id: 1,
        date: '2021-03-09',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:29:49',
        updated_at: '2021-12-21 02:29:49'
      },
      {
        id: 454,
        user_id: 1,
        date: '2021-03-09',
        customer: 'mix',
        seller: 'seller2',
        item: 32,
        payments: 32,
        remarks: null,
        created_at: '2021-12-21 02:30:02',
        updated_at: '2022-04-12 21:38:23'
      },
      {
        id: 455,
        user_id: 1,
        date: '2021-03-10',
        customer: 'mix',
        seller: 'seller2',
        item: 32,
        payments: 32,
        remarks: null,
        created_at: '2021-12-21 02:30:18',
        updated_at: '2022-04-12 21:38:43'
      },
      {
        id: 456,
        user_id: 1,
        date: '2021-03-10',
        customer: 'mix',
        seller: 'seller1',
        item: 2,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:30:29',
        updated_at: '2021-12-21 02:30:29'
      },
      {
        id: 457,
        user_id: 1,
        date: '2021-03-11',
        customer: 'mix',
        seller: 'seller1',
        item: 2,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:30:40',
        updated_at: '2021-12-21 02:30:40'
      },
      {
        id: 458,
        user_id: 1,
        date: '2021-03-11',
        customer: 'mix',
        seller: 'seller2',
        item: 16,
        payments: 16,
        remarks: null,
        created_at: '2021-12-21 02:30:52',
        updated_at: '2022-04-12 21:39:31'
      },
      {
        id: 459,
        user_id: 1,
        date: '2021-03-12',
        customer: 'mix',
        seller: 'seller1',
        item: 7,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:31:09',
        updated_at: '2021-12-21 02:31:09'
      },
      {
        id: 460,
        user_id: 1,
        date: '2021-03-13',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:31:23',
        updated_at: '2021-12-21 02:31:23'
      },
      {
        id: 461,
        user_id: 1,
        date: '2021-03-13',
        customer: 'mix',
        seller: 'seller2',
        item: 32,
        payments: 32,
        remarks: null,
        created_at: '2021-12-21 02:31:37',
        updated_at: '2022-04-12 21:39:52'
      },
      {
        id: 462,
        user_id: 1,
        date: '2021-03-14',
        customer: 'mix',
        seller: 'seller1',
        item: 7,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:32:00',
        updated_at: '2021-12-21 02:32:00'
      },
      {
        id: 463,
        user_id: 1,
        date: '2021-03-14',
        customer: 'mix',
        seller: 'seller2',
        item: 15,
        payments: 15,
        remarks: null,
        created_at: '2021-12-21 02:32:08',
        updated_at: '2022-04-12 21:40:09'
      },
      {
        id: 464,
        user_id: 1,
        date: '2021-03-15',
        customer: 'mix',
        seller: 'seller1',
        item: 21,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:32:27',
        updated_at: '2021-12-21 02:32:27'
      },
      {
        id: 465,
        user_id: 1,
        date: '2021-03-15',
        customer: 'mix',
        seller: 'seller2',
        item: 32,
        payments: 32,
        remarks: null,
        created_at: '2021-12-21 02:32:38',
        updated_at: '2022-04-12 21:40:26'
      },
      {
        id: 466,
        user_id: 1,
        date: '2021-03-16',
        customer: 'mix',
        seller: 'seller1',
        item: 8,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:32:54',
        updated_at: '2021-12-21 02:32:54'
      },
      {
        id: 467,
        user_id: 1,
        date: '2021-03-16',
        customer: 'mix',
        seller: 'seller2',
        item: 50,
        payments: 50,
        remarks: null,
        created_at: '2021-12-21 02:33:09',
        updated_at: '2022-04-12 21:40:48'
      },
      {
        id: 468,
        user_id: 1,
        date: '2021-03-17',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:33:29',
        updated_at: '2021-12-21 02:33:29'
      },
      {
        id: 469,
        user_id: 1,
        date: '2021-03-17',
        customer: 'mix',
        seller: 'seller2',
        item: 40,
        payments: 40,
        remarks: null,
        created_at: '2021-12-21 02:33:39',
        updated_at: '2022-04-12 21:41:09'
      },
      {
        id: 470,
        user_id: 1,
        date: '2021-03-18',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:33:57',
        updated_at: '2021-12-21 02:33:57'
      },
      {
        id: 471,
        user_id: 1,
        date: '2021-03-18',
        customer: 'mix',
        seller: 'seller2',
        item: 50,
        payments: 50,
        remarks: null,
        created_at: '2021-12-21 02:34:08',
        updated_at: '2022-04-12 21:41:32'
      },
      {
        id: 472,
        user_id: 1,
        date: '2021-03-19',
        customer: 'mix',
        seller: 'seller1',
        item: 8,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:34:24',
        updated_at: '2021-12-21 02:34:24'
      },
      {
        id: 473,
        user_id: 1,
        date: '2021-03-19',
        customer: 'mix',
        seller: 'seller2',
        item: 54,
        payments: 50,
        remarks: null,
        created_at: '2021-12-21 02:34:36',
        updated_at: '2022-04-12 21:41:56'
      },
      {
        id: 474,
        user_id: 1,
        date: '2021-03-20',
        customer: 'mix',
        seller: 'seller1',
        item: 3,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:34:57',
        updated_at: '2021-12-21 02:34:57'
      },
      {
        id: 475,
        user_id: 1,
        date: '2021-03-20',
        customer: 'mix',
        seller: 'seller2',
        item: 16,
        payments: 16,
        remarks: null,
        created_at: '2021-12-21 02:35:07',
        updated_at: '2022-04-12 21:42:11'
      },
      {
        id: 476,
        user_id: 1,
        date: '2021-03-21',
        customer: 'mix',
        seller: 'seller1',
        item: 9,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:35:33',
        updated_at: '2021-12-21 02:35:33'
      },
      {
        id: 477,
        user_id: 1,
        date: '2021-03-21',
        customer: 'mix',
        seller: 'seller2',
        item: 32,
        payments: 32,
        remarks: null,
        created_at: '2021-12-21 02:35:43',
        updated_at: '2022-04-12 21:42:28'
      },
      {
        id: 478,
        user_id: 1,
        date: '2021-03-22',
        customer: 'mix',
        seller: 'seller1',
        item: 18,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:36:01',
        updated_at: '2021-12-21 02:36:01'
      },
      {
        id: 479,
        user_id: 1,
        date: '2021-03-22',
        customer: 'mix',
        seller: 'seller2',
        item: 45,
        payments: 45,
        remarks: null,
        created_at: '2021-12-21 02:36:12',
        updated_at: '2022-04-12 21:42:51'
      },
      {
        id: 480,
        user_id: 1,
        date: '2021-03-23',
        customer: 'mix',
        seller: 'seller1',
        item: 12,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:36:35',
        updated_at: '2021-12-21 02:36:35'
      },
      {
        id: 481,
        user_id: 1,
        date: '2021-03-23',
        customer: 'mix',
        seller: 'seller2',
        item: 23,
        payments: 23,
        remarks: null,
        created_at: '2021-12-21 02:36:45',
        updated_at: '2022-04-12 21:43:06'
      },
      {
        id: 482,
        user_id: 1,
        date: '2021-03-24',
        customer: 'mix',
        seller: 'seller1',
        item: 7,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:37:01',
        updated_at: '2021-12-21 02:37:01'
      },
      {
        id: 483,
        user_id: 1,
        date: '2021-03-24',
        customer: 'mix',
        seller: 'seller2',
        item: 54,
        payments: 54,
        remarks: null,
        created_at: '2021-12-21 02:37:12',
        updated_at: '2022-04-12 21:43:31'
      },
      {
        id: 484,
        user_id: 1,
        date: '2021-03-25',
        customer: 'mix',
        seller: 'seller1',
        item: 1,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:37:33',
        updated_at: '2021-12-21 02:37:33'
      },
      {
        id: 485,
        user_id: 1,
        date: '2021-03-25',
        customer: 'mix',
        seller: 'seller2',
        item: 21,
        payments: 21,
        remarks: null,
        created_at: '2021-12-21 02:37:44',
        updated_at: '2022-04-12 21:43:50'
      },
      {
        id: 486,
        user_id: 1,
        date: '2021-03-26',
        customer: 'mix',
        seller: 'seller1',
        item: 12,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:37:59',
        updated_at: '2021-12-21 02:37:59'
      },
      {
        id: 487,
        user_id: 1,
        date: '2021-03-26',
        customer: 'mix',
        seller: 'seller2',
        item: 32,
        payments: 32,
        remarks: null,
        created_at: '2021-12-21 02:38:10',
        updated_at: '2022-04-12 21:44:07'
      },
      {
        id: 488,
        user_id: 1,
        date: '2021-03-27',
        customer: 'mix',
        seller: 'seller2',
        item: 20,
        payments: 20,
        remarks: null,
        created_at: '2021-12-21 02:38:39',
        updated_at: '2022-04-12 21:44:20'
      },
      {
        id: 489,
        user_id: 1,
        date: '2021-03-28',
        customer: 'mix',
        seller: 'seller1',
        item: 30,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:38:57',
        updated_at: '2021-12-21 02:38:57'
      },
      {
        id: 490,
        user_id: 1,
        date: '2021-03-28',
        customer: 'mix',
        seller: 'seller2',
        item: 61,
        payments: 61,
        remarks: null,
        created_at: '2021-12-21 02:39:10',
        updated_at: '2022-04-12 21:44:41'
      },
      {
        id: 491,
        user_id: 1,
        date: '2021-03-29',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:39:29',
        updated_at: '2021-12-21 02:39:29'
      },
      {
        id: 492,
        user_id: 1,
        date: '2021-03-29',
        customer: 'mix',
        seller: 'seller2',
        item: 53,
        payments: 53,
        remarks: null,
        created_at: '2021-12-21 02:39:45',
        updated_at: '2022-04-12 21:45:01'
      },
      {
        id: 493,
        user_id: 1,
        date: '2021-03-30',
        customer: 'mix',
        seller: 'seller1',
        item: 3,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:40:04',
        updated_at: '2021-12-21 02:40:04'
      },
      {
        id: 494,
        user_id: 1,
        date: '2021-03-30',
        customer: 'mix',
        seller: 'seller2',
        item: 30,
        payments: 30,
        remarks: null,
        created_at: '2021-12-21 02:40:17',
        updated_at: '2022-04-12 21:45:15'
      },
      {
        id: 495,
        user_id: 1,
        date: '2021-03-31',
        customer: 'mix',
        seller: 'seller1',
        item: 11,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:40:33',
        updated_at: '2021-12-21 02:40:33'
      },
      {
        id: 496,
        user_id: 1,
        date: '2021-03-31',
        customer: 'mix',
        seller: 'seller2',
        item: 48,
        payments: 51,
        remarks: null,
        created_at: '2021-12-21 02:40:47',
        updated_at: '2022-04-12 21:45:44'
      },
      {
        id: 497,
        user_id: 1,
        date: '2021-04-01',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:45:24',
        updated_at: '2021-12-21 02:45:24'
      },
      {
        id: 498,
        user_id: 1,
        date: '2021-04-01',
        customer: 'mix',
        seller: 'seller2',
        item: 13,
        payments: 13,
        remarks: null,
        created_at: '2021-12-21 02:45:33',
        updated_at: '2022-04-13 08:40:56'
      },
      {
        id: 499,
        user_id: 1,
        date: '2021-04-02',
        customer: 'mix',
        seller: 'seller1',
        item: 20,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:45:51',
        updated_at: '2021-12-21 02:45:51'
      },
      {
        id: 500,
        user_id: 1,
        date: '2021-04-02',
        customer: 'mix',
        seller: 'seller2',
        item: 9,
        payments: 9,
        remarks: null,
        created_at: '2021-12-21 02:46:01',
        updated_at: '2022-04-13 08:41:08'
      },
      {
        id: 501,
        user_id: 1,
        date: '2021-04-03',
        customer: 'mix',
        seller: 'seller1',
        item: 12,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:46:15',
        updated_at: '2021-12-21 02:46:15'
      },
      {
        id: 502,
        user_id: 1,
        date: '2021-04-03',
        customer: 'mix',
        seller: 'seller2',
        item: 26,
        payments: 17,
        remarks: null,
        created_at: '2021-12-21 02:46:25',
        updated_at: '2022-04-13 08:41:27'
      },
      {
        id: 503,
        user_id: 1,
        date: '2021-04-04',
        customer: 'mix',
        seller: 'seller1',
        item: 9,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:46:40',
        updated_at: '2021-12-21 02:46:40'
      },
      {
        id: 504,
        user_id: 1,
        date: '2021-04-05',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:46:53',
        updated_at: '2021-12-21 02:46:53'
      },
      {
        id: 505,
        user_id: 1,
        date: '2021-04-05',
        customer: 'mix',
        seller: 'seller2',
        item: 63,
        payments: 63,
        remarks: null,
        created_at: '2021-12-21 02:47:09',
        updated_at: '2022-04-13 08:41:39'
      },
      {
        id: 506,
        user_id: 1,
        date: '2021-04-06',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:47:31',
        updated_at: '2021-12-21 02:47:31'
      },
      {
        id: 507,
        user_id: 1,
        date: '2021-04-06',
        customer: 'mix',
        seller: 'seller2',
        item: 59,
        payments: 59,
        remarks: null,
        created_at: '2021-12-21 02:47:51',
        updated_at: '2022-04-13 08:41:54'
      },
      {
        id: 508,
        user_id: 1,
        date: '2021-04-07',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:48:22',
        updated_at: '2021-12-21 02:48:22'
      },
      {
        id: 509,
        user_id: 1,
        date: '2021-04-07',
        customer: 'mix',
        seller: 'seller2',
        item: 43,
        payments: 43,
        remarks: null,
        created_at: '2021-12-21 02:48:32',
        updated_at: '2022-04-13 08:42:07'
      },
      {
        id: 510,
        user_id: 1,
        date: '2021-04-08',
        customer: 'mix',
        seller: 'seller1',
        item: 23,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:48:54',
        updated_at: '2021-12-21 02:48:54'
      },
      {
        id: 511,
        user_id: 1,
        date: '2021-04-08',
        customer: 'mix',
        seller: 'seller2',
        item: 32,
        payments: 32,
        remarks: null,
        created_at: '2021-12-21 02:49:03',
        updated_at: '2022-04-13 08:42:20'
      },
      {
        id: 512,
        user_id: 1,
        date: '2021-04-09',
        customer: 'mix',
        seller: 'seller2',
        item: 40,
        payments: 40,
        remarks: null,
        created_at: '2021-12-21 02:49:15',
        updated_at: '2022-04-13 08:42:34'
      },
      {
        id: 513,
        user_id: 1,
        date: '2021-04-10',
        customer: 'mix',
        seller: 'seller2',
        item: 32,
        payments: 32,
        remarks: null,
        created_at: '2021-12-21 02:49:29',
        updated_at: '2022-04-13 08:42:47'
      },
      {
        id: 514,
        user_id: 1,
        date: '2021-04-10',
        customer: 'mix',
        seller: 'seller1',
        item: 12,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:49:41',
        updated_at: '2021-12-21 02:49:41'
      },
      {
        id: 515,
        user_id: 1,
        date: '2021-04-11',
        customer: 'mix',
        seller: 'seller1',
        item: 8,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:49:57',
        updated_at: '2021-12-21 02:49:57'
      },
      {
        id: 516,
        user_id: 1,
        date: '2021-04-11',
        customer: 'mix',
        seller: 'seller2',
        item: 35,
        payments: 35,
        remarks: null,
        created_at: '2021-12-21 02:50:08',
        updated_at: '2022-04-13 08:42:59'
      },
      {
        id: 517,
        user_id: 1,
        date: '2021-04-12',
        customer: 'mix',
        seller: 'seller2',
        item: 46,
        payments: 46,
        remarks: null,
        created_at: '2021-12-21 02:50:24',
        updated_at: '2022-04-13 08:43:12'
      },
      {
        id: 518,
        user_id: 1,
        date: '2021-04-12',
        customer: 'mix',
        seller: 'seller1',
        item: 23,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:50:35',
        updated_at: '2021-12-21 02:50:35'
      },
      {
        id: 519,
        user_id: 1,
        date: '2021-04-13',
        customer: 'mix',
        seller: 'seller1',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:50:52',
        updated_at: '2021-12-21 02:50:52'
      },
      {
        id: 520,
        user_id: 1,
        date: '2021-04-13',
        customer: 'mix',
        seller: 'seller2',
        item: 49,
        payments: 49,
        remarks: null,
        created_at: '2021-12-21 02:51:05',
        updated_at: '2022-04-13 08:43:25'
      },
      {
        id: 521,
        user_id: 1,
        date: '2021-04-14',
        customer: 'mix',
        seller: 'seller2',
        item: 27,
        payments: 27,
        remarks: null,
        created_at: '2021-12-21 02:51:24',
        updated_at: '2022-04-13 08:43:40'
      },
      {
        id: 522,
        user_id: 1,
        date: '2021-04-14',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:51:34',
        updated_at: '2021-12-21 02:51:34'
      },
      {
        id: 523,
        user_id: 1,
        date: '2021-04-15',
        customer: 'mix',
        seller: 'seller2',
        item: 33,
        payments: 33,
        remarks: null,
        created_at: '2021-12-21 02:51:51',
        updated_at: '2022-04-13 08:43:54'
      },
      {
        id: 524,
        user_id: 1,
        date: '2021-04-16',
        customer: 'mix',
        seller: 'seller2',
        item: 12,
        payments: 12,
        remarks: null,
        created_at: '2021-12-21 02:52:07',
        updated_at: '2022-04-13 08:44:03'
      },
      {
        id: 525,
        user_id: 1,
        date: '2021-04-16',
        customer: 'mix',
        seller: 'seller1',
        item: 13,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:52:17',
        updated_at: '2021-12-21 02:52:17'
      },
      {
        id: 526,
        user_id: 1,
        date: '2021-04-17',
        customer: 'mix',
        seller: 'seller2',
        item: 47,
        payments: 47,
        remarks: null,
        created_at: '2021-12-21 02:53:15',
        updated_at: '2022-04-13 08:44:15'
      },
      {
        id: 527,
        user_id: 1,
        date: '2021-04-18',
        customer: 'mix',
        seller: 'seller2',
        item: 23,
        payments: 23,
        remarks: null,
        created_at: '2021-12-21 02:53:31',
        updated_at: '2022-04-13 08:44:26'
      },
      {
        id: 528,
        user_id: 1,
        date: '2021-04-18',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:53:40',
        updated_at: '2021-12-21 02:53:40'
      },
      {
        id: 529,
        user_id: 1,
        date: '2021-04-19',
        customer: 'mix',
        seller: 'seller1',
        item: 17,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:53:54',
        updated_at: '2021-12-21 02:53:54'
      },
      {
        id: 530,
        user_id: 1,
        date: '2021-04-19',
        customer: 'mix',
        seller: 'seller2',
        item: 37,
        payments: 37,
        remarks: null,
        created_at: '2021-12-21 02:54:04',
        updated_at: '2022-04-13 08:44:38'
      },
      {
        id: 531,
        user_id: 1,
        date: '2021-04-20',
        customer: 'mix',
        seller: 'seller2',
        item: 50,
        payments: 50,
        remarks: null,
        created_at: '2021-12-21 02:54:19',
        updated_at: '2022-04-13 08:44:48'
      },
      {
        id: 532,
        user_id: 1,
        date: '2021-04-20',
        customer: 'mix',
        seller: 'seller1',
        item: 9,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:54:31',
        updated_at: '2021-12-21 02:54:31'
      },
      {
        id: 533,
        user_id: 1,
        date: '2021-04-21',
        customer: 'mix',
        seller: 'seller2',
        item: 61,
        payments: 61,
        remarks: null,
        created_at: '2021-12-21 02:57:21',
        updated_at: '2022-04-13 08:45:06'
      },
      {
        id: 534,
        user_id: 1,
        date: '2021-04-22',
        customer: 'mix',
        seller: 'seller2',
        item: 62,
        payments: 62,
        remarks: null,
        created_at: '2021-12-21 02:57:37',
        updated_at: '2022-04-13 08:45:18'
      },
      {
        id: 535,
        user_id: 1,
        date: '2021-04-23',
        customer: 'mix',
        seller: 'seller2',
        item: 45,
        payments: 45,
        remarks: null,
        created_at: '2021-12-21 02:57:53',
        updated_at: '2022-04-13 08:45:33'
      },
      {
        id: 536,
        user_id: 1,
        date: '2021-04-23',
        customer: 'mix',
        seller: 'seller1',
        item: 18,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:58:04',
        updated_at: '2021-12-21 02:58:04'
      },
      {
        id: 537,
        user_id: 1,
        date: '2021-04-24',
        customer: 'mix',
        seller: 'seller1',
        item: 7,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:58:19',
        updated_at: '2021-12-21 02:58:19'
      },
      {
        id: 538,
        user_id: 1,
        date: '2021-04-24',
        customer: 'mix',
        seller: 'seller2',
        item: 40,
        payments: 38,
        remarks: null,
        created_at: '2021-12-21 02:58:30',
        updated_at: '2022-04-13 08:46:03'
      },
      {
        id: 539,
        user_id: 1,
        date: '2021-04-25',
        customer: 'mix',
        seller: 'seller2',
        item: 24,
        payments: 24,
        remarks: null,
        created_at: '2021-12-21 02:58:57',
        updated_at: '2022-04-13 08:46:17'
      },
      {
        id: 540,
        user_id: 1,
        date: '2021-04-25',
        customer: 'mix',
        seller: 'seller1',
        item: 19,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:59:07',
        updated_at: '2021-12-21 02:59:07'
      },
      {
        id: 541,
        user_id: 1,
        date: '2021-04-26',
        customer: 'mix',
        seller: 'seller1',
        item: 3,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 02:59:25',
        updated_at: '2021-12-21 02:59:25'
      },
      {
        id: 542,
        user_id: 1,
        date: '2021-04-26',
        customer: 'mix',
        seller: 'seller2',
        item: 40,
        payments: 40,
        remarks: null,
        created_at: '2021-12-21 02:59:36',
        updated_at: '2022-04-13 08:46:27'
      },
      {
        id: 543,
        user_id: 1,
        date: '2021-04-27',
        customer: 'mix',
        seller: 'seller2',
        item: 37,
        payments: 37,
        remarks: null,
        created_at: '2021-12-21 02:59:50',
        updated_at: '2022-04-13 08:46:43'
      },
      {
        id: 544,
        user_id: 1,
        date: '2021-04-27',
        customer: 'mix',
        seller: 'seller1',
        item: 8,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 03:00:02',
        updated_at: '2021-12-21 03:00:02'
      },
      {
        id: 545,
        user_id: 1,
        date: '2021-04-28',
        customer: 'mix',
        seller: 'seller1',
        item: 3,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 03:00:18',
        updated_at: '2021-12-21 03:00:18'
      },
      {
        id: 546,
        user_id: 1,
        date: '2021-04-28',
        customer: 'mix',
        seller: 'seller2',
        item: 7,
        payments: 7,
        remarks: null,
        created_at: '2021-12-21 03:00:30',
        updated_at: '2022-04-13 08:46:55'
      },
      {
        id: 547,
        user_id: 1,
        date: '2021-04-29',
        customer: 'mix',
        seller: 'seller2',
        item: 14,
        payments: 14,
        remarks: null,
        created_at: '2021-12-21 03:00:44',
        updated_at: '2022-04-13 08:47:06'
      },
      {
        id: 548,
        user_id: 1,
        date: '2021-04-29',
        customer: 'mix',
        seller: 'seller1',
        item: 13,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 03:00:51',
        updated_at: '2021-12-21 03:00:51'
      },
      {
        id: 549,
        user_id: 1,
        date: '2021-04-30',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 03:01:05',
        updated_at: '2021-12-21 03:01:05'
      },
      {
        id: 550,
        user_id: 1,
        date: '2021-04-30',
        customer: 'mix',
        seller: 'seller2',
        item: 11,
        payments: 11,
        remarks: null,
        created_at: '2021-12-21 03:01:18',
        updated_at: '2022-04-13 08:47:17'
      },
      {
        id: 552,
        user_id: 1,
        date: '2021-05-01',
        customer: 'mix',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2021-12-21 09:34:20',
        updated_at: '2021-12-26 20:30:35'
      },
      {
        id: 553,
        user_id: 1,
        date: '2021-05-01',
        customer: 'mix',
        seller: 'seller1',
        item: 15,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 09:35:00',
        updated_at: '2021-12-21 09:35:00'
      },
      {
        id: 554,
        user_id: 1,
        date: '2021-05-01',
        customer: 'mix',
        seller: 'seller2',
        item: 13,
        payments: 13,
        remarks: null,
        created_at: '2021-12-21 09:35:17',
        updated_at: '2022-04-13 08:47:53'
      },
      {
        id: 555,
        user_id: 1,
        date: '2021-05-02',
        customer: 'mix',
        seller: 'station',
        item: 11,
        payments: 11,
        remarks: null,
        created_at: '2021-12-21 09:35:53',
        updated_at: '2021-12-26 20:30:46'
      },
      {
        id: 556,
        user_id: 1,
        date: '2021-05-02',
        customer: 'mix',
        seller: 'seller1',
        item: 8,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 09:36:17',
        updated_at: '2021-12-21 09:36:17'
      },
      {
        id: 557,
        user_id: 1,
        date: '2021-05-02',
        customer: 'mix',
        seller: 'seller2',
        item: 14,
        payments: 14,
        remarks: null,
        created_at: '2021-12-21 09:36:31',
        updated_at: '2022-04-13 08:48:04'
      },
      {
        id: 558,
        user_id: 1,
        date: '2021-05-03',
        customer: 'mix',
        seller: 'seller2',
        item: 8,
        payments: 8,
        remarks: null,
        created_at: '2021-12-21 09:37:18',
        updated_at: '2022-04-13 08:48:14'
      },
      {
        id: 559,
        user_id: 1,
        date: '2021-05-04',
        customer: 'mix',
        seller: 'seller2',
        item: 68,
        payments: 68,
        remarks: null,
        created_at: '2021-12-21 09:37:53',
        updated_at: '2022-04-13 08:48:29'
      },
      {
        id: 560,
        user_id: 1,
        date: '2021-05-04',
        customer: 'mix',
        seller: 'seller1',
        item: 3,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 09:38:33',
        updated_at: '2021-12-21 09:38:33'
      },
      {
        id: 561,
        user_id: 1,
        date: '2021-05-05',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 09:39:17',
        updated_at: '2021-12-21 09:39:17'
      },
      {
        id: 562,
        user_id: 1,
        date: '2021-05-05',
        customer: 'mix',
        seller: 'seller2',
        item: 26,
        payments: 26,
        remarks: null,
        created_at: '2021-12-21 09:39:32',
        updated_at: '2022-04-13 08:48:47'
      },
      {
        id: 563,
        user_id: 1,
        date: '2021-05-06',
        customer: 'mix',
        seller: 'seller2',
        item: 18,
        payments: 18,
        remarks: null,
        created_at: '2021-12-21 09:39:51',
        updated_at: '2022-04-13 08:48:58'
      },
      {
        id: 564,
        user_id: 1,
        date: '2021-05-06',
        customer: 'mix',
        seller: 'seller1',
        item: 12,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 09:40:07',
        updated_at: '2021-12-21 09:40:07'
      },
      {
        id: 565,
        user_id: 1,
        date: '2021-05-06',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2021-12-21 09:40:25',
        updated_at: '2021-12-26 20:31:00'
      },
      {
        id: 566,
        user_id: 1,
        date: '2021-05-07',
        customer: 'mix',
        seller: 'station',
        item: 21,
        payments: 21,
        remarks: null,
        created_at: '2021-12-21 09:40:52',
        updated_at: '2021-12-26 20:31:24'
      },
      {
        id: 567,
        user_id: 1,
        date: '2021-05-07',
        customer: 'mix',
        seller: 'seller1',
        item: 11,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 09:41:06',
        updated_at: '2021-12-21 09:41:06'
      },
      {
        id: 568,
        user_id: 1,
        date: '2021-05-08',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 09:41:31',
        updated_at: '2021-12-21 09:41:31'
      },
      {
        id: 569,
        user_id: 1,
        date: '2021-05-08',
        customer: 'mix',
        seller: 'seller2',
        item: 8,
        payments: 8,
        remarks: null,
        created_at: '2021-12-21 09:41:40',
        updated_at: '2022-04-13 08:49:09'
      },
      {
        id: 570,
        user_id: 1,
        date: '2021-05-08',
        customer: 'mix',
        seller: 'station',
        item: 3,
        payments: 3,
        remarks: null,
        created_at: '2021-12-21 09:41:54',
        updated_at: '2021-12-26 20:31:41'
      },
      {
        id: 572,
        user_id: 1,
        date: '2021-05-09',
        customer: 'mix',
        seller: 'seller1',
        item: 9,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 09:42:29',
        updated_at: '2021-12-21 09:42:29'
      },
      {
        id: 573,
        user_id: 1,
        date: '2021-05-09',
        customer: 'mix',
        seller: 'seller2',
        item: 14,
        payments: 14,
        remarks: null,
        created_at: '2021-12-21 09:42:50',
        updated_at: '2022-04-13 08:49:20'
      },
      {
        id: 575,
        user_id: 1,
        date: '2021-05-10',
        customer: 'mix',
        seller: 'seller1',
        item: 19,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 09:57:03',
        updated_at: '2021-12-21 09:57:03'
      },
      {
        id: 576,
        user_id: 1,
        date: '2021-05-10',
        customer: 'mix',
        seller: 'seller2',
        item: 26,
        payments: 26,
        remarks: null,
        created_at: '2021-12-21 09:57:11',
        updated_at: '2022-04-13 08:49:34'
      },
      {
        id: 577,
        user_id: 1,
        date: '2021-05-11',
        customer: 'mix',
        seller: 'seller2',
        item: 11,
        payments: 11,
        remarks: null,
        created_at: '2021-12-21 09:57:33',
        updated_at: '2022-04-13 08:49:46'
      },
      {
        id: 578,
        user_id: 1,
        date: '2021-05-11',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 09:57:43',
        updated_at: '2021-12-21 09:57:43'
      },
      {
        id: 579,
        user_id: 1,
        date: '2021-05-12',
        customer: 'mix',
        seller: 'seller1',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 09:58:05',
        updated_at: '2021-12-21 09:58:05'
      },
      {
        id: 580,
        user_id: 1,
        date: '2021-05-12',
        customer: 'mix',
        seller: 'seller2',
        item: 21,
        payments: 21,
        remarks: null,
        created_at: '2021-12-21 09:58:13',
        updated_at: '2022-04-13 08:49:59'
      },
      {
        id: 581,
        user_id: 1,
        date: '2021-05-13',
        customer: 'mix',
        seller: 'seller2',
        item: 23,
        payments: 23,
        remarks: null,
        created_at: '2021-12-21 09:58:31',
        updated_at: '2022-04-13 08:50:10'
      },
      {
        id: 582,
        user_id: 1,
        date: '2021-05-13',
        customer: 'mix',
        seller: 'seller1',
        item: 12,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 09:58:39',
        updated_at: '2021-12-21 09:58:39'
      },
      {
        id: 583,
        user_id: 1,
        date: '2021-05-14',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2021-12-21 09:59:00',
        updated_at: '2021-12-26 20:40:10'
      },
      {
        id: 584,
        user_id: 1,
        date: '2021-05-14',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 09:59:08',
        updated_at: '2021-12-21 09:59:08'
      },
      {
        id: 585,
        user_id: 1,
        date: '2021-05-14',
        customer: 'mix',
        seller: 'seller2',
        item: 8,
        payments: 8,
        remarks: null,
        created_at: '2021-12-21 09:59:16',
        updated_at: '2022-04-13 08:50:28'
      },
      {
        id: 586,
        user_id: 1,
        date: '2021-05-15',
        customer: 'mix',
        seller: 'seller1',
        item: 14,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 09:59:37',
        updated_at: '2021-12-21 09:59:37'
      },
      {
        id: 587,
        user_id: 1,
        date: '2021-05-15',
        customer: 'mix',
        seller: 'seller2',
        item: 9,
        payments: 9,
        remarks: null,
        created_at: '2021-12-21 09:59:47',
        updated_at: '2022-04-13 08:50:39'
      },
      {
        id: 588,
        user_id: 1,
        date: '2021-05-16',
        customer: 'mix',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2021-12-21 10:00:10',
        updated_at: '2021-12-26 20:40:20'
      },
      {
        id: 589,
        user_id: 1,
        date: '2021-05-16',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 10:00:18',
        updated_at: '2021-12-21 10:00:18'
      },
      {
        id: 590,
        user_id: 1,
        date: '2021-05-16',
        customer: 'mix',
        seller: 'seller2',
        item: 23,
        payments: 23,
        remarks: null,
        created_at: '2021-12-21 10:00:27',
        updated_at: '2022-04-13 08:50:49'
      },
      {
        id: 591,
        user_id: 1,
        date: '2021-05-17',
        customer: 'mix',
        seller: 'station',
        item: 36,
        payments: 36,
        remarks: null,
        created_at: '2021-12-21 10:00:46',
        updated_at: '2021-12-26 20:41:01'
      },
      {
        id: 592,
        user_id: 1,
        date: '2021-05-17',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 10:00:56',
        updated_at: '2021-12-21 10:00:56'
      },
      {
        id: 593,
        user_id: 1,
        date: '2021-05-17',
        customer: 'mix',
        seller: 'seller2',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2021-12-21 10:01:05',
        updated_at: '2022-04-13 08:51:01'
      },
      {
        id: 594,
        user_id: 1,
        date: '2021-05-18',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2021-12-21 10:01:19',
        updated_at: '2021-12-26 20:41:23'
      },
      {
        id: 595,
        user_id: 1,
        date: '2021-05-18',
        customer: 'mix',
        seller: 'seller1',
        item: 13,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 10:01:27',
        updated_at: '2021-12-21 10:01:27'
      },
      {
        id: 596,
        user_id: 1,
        date: '2021-05-18',
        customer: 'mix',
        seller: 'seller2',
        item: 17,
        payments: 17,
        remarks: null,
        created_at: '2021-12-21 10:01:34',
        updated_at: '2022-04-13 08:51:11'
      },
      {
        id: 597,
        user_id: 1,
        date: '2021-05-19',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2021-12-21 10:01:53',
        updated_at: '2021-12-26 20:41:38'
      },
      {
        id: 598,
        user_id: 1,
        date: '2021-05-19',
        customer: 'mix',
        seller: 'seller1',
        item: 20,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 10:02:02',
        updated_at: '2021-12-21 10:02:02'
      },
      {
        id: 599,
        user_id: 1,
        date: '2021-05-19',
        customer: 'mix',
        seller: 'seller2',
        item: 5,
        payments: 5,
        remarks: null,
        created_at: '2021-12-21 10:02:13',
        updated_at: '2022-04-13 08:51:26'
      },
      {
        id: 600,
        user_id: 1,
        date: '2021-05-20',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 10:02:33',
        updated_at: '2021-12-21 10:02:33'
      },
      {
        id: 601,
        user_id: 1,
        date: '2021-05-20',
        customer: 'mix',
        seller: 'seller2',
        item: 36,
        payments: 36,
        remarks: null,
        created_at: '2021-12-21 10:02:49',
        updated_at: '2022-04-13 08:51:38'
      },
      {
        id: 602,
        user_id: 1,
        date: '2021-05-21',
        customer: 'mix',
        seller: 'station',
        item: 3,
        payments: 3,
        remarks: null,
        created_at: '2021-12-21 10:03:16',
        updated_at: '2021-12-26 20:41:53'
      },
      {
        id: 603,
        user_id: 1,
        date: '2021-05-21',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 10:03:25',
        updated_at: '2021-12-21 10:03:25'
      },
      {
        id: 604,
        user_id: 1,
        date: '2021-05-22',
        customer: 'mix',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2021-12-21 10:03:41',
        updated_at: '2021-12-26 20:42:08'
      },
      {
        id: 605,
        user_id: 1,
        date: '2021-05-22',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 10:03:50',
        updated_at: '2021-12-21 10:03:50'
      },
      {
        id: 606,
        user_id: 1,
        date: '2021-05-22',
        customer: 'mix',
        seller: 'seller2',
        item: 33,
        payments: 33,
        remarks: null,
        created_at: '2021-12-21 10:04:00',
        updated_at: '2022-04-13 08:51:54'
      },
      {
        id: 607,
        user_id: 1,
        date: '2021-05-23',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2021-12-21 10:04:26',
        updated_at: '2021-12-26 20:42:17'
      },
      {
        id: 608,
        user_id: 1,
        date: '2021-05-23',
        customer: 'mix',
        seller: 'seller1',
        item: 26,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 10:04:42',
        updated_at: '2021-12-21 10:04:42'
      },
      {
        id: 609,
        user_id: 1,
        date: '2021-05-23',
        customer: 'mix',
        seller: 'seller2',
        item: 32,
        payments: 32,
        remarks: null,
        created_at: '2021-12-21 10:04:50',
        updated_at: '2022-04-13 08:52:17'
      },
      {
        id: 610,
        user_id: 1,
        date: '2021-05-24',
        customer: 'mix',
        seller: 'station',
        item: 26,
        payments: 26,
        remarks: null,
        created_at: '2021-12-21 10:05:07',
        updated_at: '2021-12-26 20:42:31'
      },
      {
        id: 611,
        user_id: 1,
        date: '2021-05-24',
        customer: 'mix',
        seller: 'seller1',
        item: 11,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 10:05:16',
        updated_at: '2021-12-21 10:05:16'
      },
      {
        id: 612,
        user_id: 1,
        date: '2021-05-24',
        customer: 'mix',
        seller: 'seller2',
        item: 7,
        payments: 7,
        remarks: null,
        created_at: '2021-12-21 10:05:33',
        updated_at: '2022-04-13 08:52:29'
      },
      {
        id: 613,
        user_id: 1,
        date: '2021-05-25',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2021-12-21 10:05:52',
        updated_at: '2021-12-26 20:42:43'
      },
      {
        id: 614,
        user_id: 1,
        date: '2021-05-25',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 10:06:01',
        updated_at: '2021-12-21 10:06:01'
      },
      {
        id: 615,
        user_id: 1,
        date: '2021-05-26',
        customer: 'mix',
        seller: 'station',
        item: 3,
        payments: 3,
        remarks: null,
        created_at: '2021-12-21 10:06:20',
        updated_at: '2021-12-26 20:42:56'
      },
      {
        id: 616,
        user_id: 1,
        date: '2021-05-26',
        customer: 'mix',
        seller: 'seller1',
        item: 9,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 10:06:34',
        updated_at: '2021-12-21 10:06:34'
      },
      {
        id: 617,
        user_id: 1,
        date: '2021-05-26',
        customer: 'mix',
        seller: 'seller2',
        item: 17,
        payments: 17,
        remarks: null,
        created_at: '2021-12-21 10:06:52',
        updated_at: '2022-04-13 08:52:50'
      },
      {
        id: 618,
        user_id: 1,
        date: '2021-05-27',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2021-12-21 10:07:19',
        updated_at: '2021-12-26 20:43:05'
      },
      {
        id: 619,
        user_id: 1,
        date: '2021-05-27',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 10:07:32',
        updated_at: '2021-12-21 10:07:32'
      },
      {
        id: 620,
        user_id: 1,
        date: '2021-05-27',
        customer: 'mix',
        seller: 'seller2',
        item: 9,
        payments: 12,
        remarks: null,
        created_at: '2021-12-21 10:07:47',
        updated_at: '2022-04-13 08:53:12'
      },
      {
        id: 621,
        user_id: 1,
        date: '2021-05-28',
        customer: 'mix',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2021-12-21 10:08:09',
        updated_at: '2021-12-26 20:43:14'
      },
      {
        id: 622,
        user_id: 1,
        date: '2021-05-28',
        customer: 'mix',
        seller: 'seller1',
        item: 33,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 10:08:22',
        updated_at: '2021-12-21 10:08:22'
      },
      {
        id: 623,
        user_id: 1,
        date: '2021-05-28',
        customer: 'mix',
        seller: 'seller2',
        item: 28,
        payments: 28,
        remarks: null,
        created_at: '2021-12-21 10:08:31',
        updated_at: '2022-04-13 08:53:27'
      },
      {
        id: 624,
        user_id: 1,
        date: '2021-05-29',
        customer: 'mix',
        seller: 'station',
        item: 32,
        payments: 32,
        remarks: null,
        created_at: '2021-12-21 10:08:51',
        updated_at: '2021-12-26 20:43:50'
      },
      {
        id: 625,
        user_id: 1,
        date: '2021-05-29',
        customer: 'mix',
        seller: 'seller2',
        item: 17,
        payments: 17,
        remarks: null,
        created_at: '2021-12-21 10:09:08',
        updated_at: '2022-04-13 08:53:39'
      },
      {
        id: 626,
        user_id: 1,
        date: '2021-05-30',
        customer: 'mix',
        seller: 'station',
        item: 3,
        payments: 3,
        remarks: null,
        created_at: '2021-12-21 10:09:26',
        updated_at: '2021-12-26 21:03:29'
      },
      {
        id: 627,
        user_id: 1,
        date: '2021-05-30',
        customer: 'mix',
        seller: 'seller1',
        item: 15,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 10:09:38',
        updated_at: '2021-12-21 10:09:38'
      },
      {
        id: 628,
        user_id: 1,
        date: '2021-05-30',
        customer: 'mix',
        seller: 'seller2',
        item: 24,
        payments: 24,
        remarks: null,
        created_at: '2021-12-21 10:09:51',
        updated_at: '2022-04-13 08:53:51'
      },
      {
        id: 629,
        user_id: 1,
        date: '2021-05-31',
        customer: 'mix',
        seller: 'station',
        item: 3,
        payments: 3,
        remarks: null,
        created_at: '2021-12-21 10:10:07',
        updated_at: '2021-12-26 20:44:27'
      },
      {
        id: 630,
        user_id: 1,
        date: '2021-05-31',
        customer: 'mix',
        seller: 'seller2',
        item: 20,
        payments: 20,
        remarks: null,
        created_at: '2021-12-21 10:10:18',
        updated_at: '2022-04-13 08:54:11'
      },
      {
        id: 631,
        user_id: 1,
        date: '2021-06-01',
        customer: 'mix',
        seller: 'station',
        item: 6,
        payments: 6,
        remarks: null,
        created_at: '2021-12-21 10:41:41',
        updated_at: '2021-12-26 21:05:21'
      },
      {
        id: 632,
        user_id: 1,
        date: '2021-06-01',
        customer: 'mix',
        seller: 'seller1',
        item: 30,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 10:41:53',
        updated_at: '2021-12-21 10:41:53'
      },
      {
        id: 633,
        user_id: 1,
        date: '2021-06-01',
        customer: 'mix',
        seller: 'seller2',
        item: 7,
        payments: 7,
        remarks: null,
        created_at: '2021-12-21 10:42:03',
        updated_at: '2022-04-13 08:54:42'
      },
      {
        id: 634,
        user_id: 1,
        date: '2021-06-02',
        customer: 'mix',
        seller: 'seller1',
        item: 16,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 10:42:23',
        updated_at: '2021-12-21 10:42:23'
      },
      {
        id: 635,
        user_id: 1,
        date: '2021-06-03',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 10:42:52',
        updated_at: '2021-12-21 10:42:52'
      },
      {
        id: 636,
        user_id: 1,
        date: '2021-06-03',
        customer: 'mix',
        seller: 'seller2',
        item: 38,
        payments: 38,
        remarks: null,
        created_at: '2021-12-21 10:43:20',
        updated_at: '2022-04-13 08:54:59'
      },
      {
        id: 637,
        user_id: 1,
        date: '2021-06-04',
        customer: 'mix',
        seller: 'station',
        item: 14,
        payments: 14,
        remarks: null,
        created_at: '2021-12-21 10:43:53',
        updated_at: '2021-12-26 21:05:35'
      },
      {
        id: 638,
        user_id: 1,
        date: '2021-06-04',
        customer: 'mix',
        seller: 'seller1',
        item: 9,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 10:44:11',
        updated_at: '2021-12-21 10:44:11'
      },
      {
        id: 639,
        user_id: 1,
        date: '2021-06-04',
        customer: 'mix',
        seller: 'seller2',
        item: 27,
        payments: 27,
        remarks: null,
        created_at: '2021-12-21 10:44:27',
        updated_at: '2022-04-13 08:55:29'
      },
      {
        id: 640,
        user_id: 1,
        date: '2021-06-05',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2021-12-21 11:34:05',
        updated_at: '2021-12-26 21:05:48'
      },
      {
        id: 641,
        user_id: 1,
        date: '2021-06-05',
        customer: 'mix',
        seller: 'seller2',
        item: 29,
        payments: 29,
        remarks: null,
        created_at: '2021-12-21 11:34:20',
        updated_at: '2022-04-13 08:55:42'
      },
      {
        id: 642,
        user_id: 1,
        date: '2021-06-06',
        customer: 'mix',
        seller: 'station',
        item: 3,
        payments: 3,
        remarks: null,
        created_at: '2021-12-21 11:34:41',
        updated_at: '2021-12-26 21:06:37'
      },
      {
        id: 643,
        user_id: 1,
        date: '2021-06-06',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 11:34:51',
        updated_at: '2021-12-21 11:34:51'
      },
      {
        id: 644,
        user_id: 1,
        date: '2021-06-07',
        customer: 'mix',
        seller: 'station',
        item: 5,
        payments: 5,
        remarks: null,
        created_at: '2021-12-21 11:35:07',
        updated_at: '2021-12-26 21:06:53'
      },
      {
        id: 645,
        user_id: 1,
        date: '2021-06-07',
        customer: 'mix',
        seller: 'seller1',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 11:35:15',
        updated_at: '2021-12-21 11:35:15'
      },
      {
        id: 646,
        user_id: 1,
        date: '2021-06-07',
        customer: 'mix',
        seller: 'seller2',
        item: 26,
        payments: 26,
        remarks: null,
        created_at: '2021-12-21 11:35:26',
        updated_at: '2022-04-13 08:56:00'
      },
      {
        id: 647,
        user_id: 1,
        date: '2021-06-08',
        customer: 'mix',
        seller: 'seller2',
        item: 33,
        payments: 33,
        remarks: null,
        created_at: '2021-12-21 11:35:52',
        updated_at: '2022-04-13 08:56:11'
      },
      {
        id: 648,
        user_id: 1,
        date: '2021-06-09',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2021-12-21 11:36:12',
        updated_at: '2021-12-26 21:07:09'
      },
      {
        id: 649,
        user_id: 1,
        date: '2021-06-09',
        customer: 'mix',
        seller: 'seller1',
        item: 16,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 11:36:21',
        updated_at: '2021-12-21 11:36:21'
      },
      {
        id: 650,
        user_id: 1,
        date: '2021-06-09',
        customer: 'mix',
        seller: 'seller2',
        item: 22,
        payments: 22,
        remarks: null,
        created_at: '2021-12-21 11:36:30',
        updated_at: '2022-04-13 08:56:33'
      },
      {
        id: 651,
        user_id: 1,
        date: '2021-06-10',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2021-12-21 11:36:56',
        updated_at: '2021-12-26 21:07:17'
      },
      {
        id: 652,
        user_id: 1,
        date: '2021-06-10',
        customer: 'mix',
        seller: 'seller1',
        item: 9,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 11:37:05',
        updated_at: '2021-12-21 11:37:05'
      },
      {
        id: 653,
        user_id: 1,
        date: '2021-06-10',
        customer: 'mix',
        seller: 'seller2',
        item: 11,
        payments: 11,
        remarks: null,
        created_at: '2021-12-21 11:37:13',
        updated_at: '2022-04-13 08:56:49'
      },
      {
        id: 654,
        user_id: 1,
        date: '2021-06-11',
        customer: 'mix',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2021-12-21 11:37:33',
        updated_at: '2021-12-26 21:07:26'
      },
      {
        id: 655,
        user_id: 1,
        date: '2021-06-11',
        customer: 'mix',
        seller: 'seller1',
        item: 7,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 11:37:40',
        updated_at: '2021-12-21 11:37:40'
      },
      {
        id: 656,
        user_id: 1,
        date: '2021-06-11',
        customer: 'mix',
        seller: 'seller2',
        item: 30,
        payments: 30,
        remarks: null,
        created_at: '2021-12-21 11:37:50',
        updated_at: '2022-04-13 08:57:05'
      },
      {
        id: 657,
        user_id: 1,
        date: '2021-06-12',
        customer: 'mix',
        seller: 'station',
        item: 25,
        payments: 25,
        remarks: null,
        created_at: '2021-12-21 11:38:12',
        updated_at: '2021-12-26 21:07:42'
      },
      {
        id: 658,
        user_id: 1,
        date: '2021-06-12',
        customer: 'mix',
        seller: 'seller1',
        item: 37,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 11:38:21',
        updated_at: '2021-12-21 11:38:21'
      },
      {
        id: 659,
        user_id: 1,
        date: '2021-06-12',
        customer: 'mix',
        seller: 'seller2',
        item: 11,
        payments: 11,
        remarks: null,
        created_at: '2021-12-21 11:38:31',
        updated_at: '2022-04-13 08:57:18'
      },
      {
        id: 660,
        user_id: 1,
        date: '2021-06-13',
        customer: 'mix',
        seller: 'seller2',
        item: 12,
        payments: 12,
        remarks: null,
        created_at: '2021-12-21 11:38:50',
        updated_at: '2022-04-13 08:57:37'
      },
      {
        id: 661,
        user_id: 1,
        date: '2021-06-14',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2021-12-21 11:39:03',
        updated_at: '2021-12-26 21:08:02'
      },
      {
        id: 662,
        user_id: 1,
        date: '2021-06-14',
        customer: 'mix',
        seller: 'seller1',
        item: 7,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 11:39:10',
        updated_at: '2021-12-21 11:39:10'
      },
      {
        id: 663,
        user_id: 1,
        date: '2021-06-14',
        customer: 'mix',
        seller: 'seller2',
        item: 17,
        payments: 17,
        remarks: null,
        created_at: '2021-12-21 11:39:18',
        updated_at: '2022-04-13 08:58:36'
      },
      {
        id: 664,
        user_id: 1,
        date: '2021-06-15',
        customer: 'mix',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2021-12-21 11:39:59',
        updated_at: '2021-12-26 21:08:09'
      },
      {
        id: 665,
        user_id: 1,
        date: '2021-06-15',
        customer: 'mix',
        seller: 'seller2',
        item: 12,
        payments: 10,
        remarks: null,
        created_at: '2021-12-21 11:40:12',
        updated_at: '2022-04-13 08:58:48'
      },
      {
        id: 666,
        user_id: 1,
        date: '2021-06-16',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2021-12-21 11:40:35',
        updated_at: '2021-12-26 21:08:16'
      },
      {
        id: 667,
        user_id: 1,
        date: '2021-06-16',
        customer: 'mix',
        seller: 'seller1',
        item: 11,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 11:40:44',
        updated_at: '2021-12-21 11:40:44'
      },
      {
        id: 668,
        user_id: 1,
        date: '2021-06-17',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2021-12-21 11:41:06',
        updated_at: '2021-12-26 21:08:25'
      },
      {
        id: 669,
        user_id: 1,
        date: '2021-06-17',
        customer: 'mix',
        seller: 'seller1',
        item: 59,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 11:41:20',
        updated_at: '2021-12-21 11:41:20'
      },
      {
        id: 670,
        user_id: 1,
        date: '2021-06-18',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2021-12-21 11:41:43',
        updated_at: '2021-12-26 21:08:34'
      },
      {
        id: 671,
        user_id: 1,
        date: '2021-06-18',
        customer: 'mix',
        seller: 'seller1',
        item: 16,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 11:41:52',
        updated_at: '2021-12-21 11:41:52'
      },
      {
        id: 672,
        user_id: 1,
        date: '2021-06-19',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2021-12-21 11:44:31',
        updated_at: '2021-12-26 21:09:46'
      },
      {
        id: 673,
        user_id: 1,
        date: '2021-06-19',
        customer: 'mix',
        seller: 'seller1',
        item: 11,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 11:44:54',
        updated_at: '2021-12-21 11:44:54'
      },
      {
        id: 674,
        user_id: 1,
        date: '2021-06-19',
        customer: 'mix',
        seller: 'seller2',
        item: 39,
        payments: 39,
        remarks: null,
        created_at: '2021-12-21 11:45:40',
        updated_at: '2022-04-13 08:59:10'
      },
      {
        id: 675,
        user_id: 1,
        date: '2021-06-20',
        customer: 'mix',
        seller: 'station',
        item: 28,
        payments: 28,
        remarks: null,
        created_at: '2021-12-21 11:46:24',
        updated_at: '2021-12-26 21:10:33'
      },
      {
        id: 676,
        user_id: 1,
        date: '2021-06-20',
        customer: 'mix',
        seller: 'seller1',
        item: 26,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 11:46:33',
        updated_at: '2021-12-21 11:46:33'
      },
      {
        id: 677,
        user_id: 1,
        date: '2021-06-20',
        customer: 'mix',
        seller: 'seller2',
        item: 5,
        payments: 5,
        remarks: null,
        created_at: '2021-12-21 11:46:44',
        updated_at: '2022-04-13 08:59:23'
      },
      {
        id: 678,
        user_id: 1,
        date: '2021-06-21',
        customer: 'mix',
        seller: 'seller2',
        item: 16,
        payments: 16,
        remarks: null,
        created_at: '2021-12-21 11:47:05',
        updated_at: '2022-04-13 08:59:59'
      },
      {
        id: 679,
        user_id: 1,
        date: '2021-06-21',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2021-12-21 11:47:16',
        updated_at: '2021-12-26 21:12:17'
      },
      {
        id: 680,
        user_id: 1,
        date: '2021-06-22',
        customer: 'mix',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2021-12-21 11:47:33',
        updated_at: '2021-12-26 21:12:35'
      },
      {
        id: 681,
        user_id: 1,
        date: '2021-06-22',
        customer: 'mix',
        seller: 'seller1',
        item: 9,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 11:47:45',
        updated_at: '2021-12-21 11:47:45'
      },
      {
        id: 682,
        user_id: 1,
        date: '2021-06-22',
        customer: 'mix',
        seller: 'seller2',
        item: 44,
        payments: 44,
        remarks: null,
        created_at: '2021-12-21 11:48:04',
        updated_at: '2022-04-13 09:01:14'
      },
      {
        id: 683,
        user_id: 1,
        date: '2021-06-23',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2021-12-21 11:48:26',
        updated_at: '2021-12-26 21:12:42'
      },
      {
        id: 684,
        user_id: 1,
        date: '2021-06-23',
        customer: 'mix',
        seller: 'seller1',
        item: 18,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 11:48:40',
        updated_at: '2021-12-21 11:48:40'
      },
      {
        id: 685,
        user_id: 1,
        date: '2021-06-23',
        customer: 'mix',
        seller: 'seller2',
        item: 18,
        payments: 18,
        remarks: null,
        created_at: '2021-12-21 11:48:47',
        updated_at: '2022-04-13 09:01:33'
      },
      {
        id: 686,
        user_id: 1,
        date: '2021-06-24',
        customer: 'mix',
        seller: 'seller2',
        item: 4,
        payments: 2,
        remarks: null,
        created_at: '2021-12-21 11:49:03',
        updated_at: '2022-04-13 09:01:48'
      },
      {
        id: 687,
        user_id: 1,
        date: '2021-06-24',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 11:49:11',
        updated_at: '2021-12-21 11:49:11'
      },
      {
        id: 688,
        user_id: 1,
        date: '2021-06-24',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2021-12-21 11:49:24',
        updated_at: '2021-12-26 21:12:49'
      },
      {
        id: 689,
        user_id: 1,
        date: '2021-06-25',
        customer: 'mix',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2021-12-21 11:49:38',
        updated_at: '2021-12-26 21:13:10'
      },
      {
        id: 690,
        user_id: 1,
        date: '2021-06-25',
        customer: 'mix',
        seller: 'seller1',
        item: 12,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 11:49:48',
        updated_at: '2021-12-21 11:50:28'
      },
      {
        id: 691,
        user_id: 1,
        date: '2021-06-25',
        customer: 'mix',
        seller: 'seller2',
        item: 17,
        payments: 17,
        remarks: null,
        created_at: '2021-12-21 11:50:06',
        updated_at: '2022-04-13 09:02:03'
      },
      {
        id: 692,
        user_id: 1,
        date: '2021-06-26',
        customer: 'mix',
        seller: 'station',
        item: 3,
        payments: 3,
        remarks: null,
        created_at: '2021-12-21 11:51:44',
        updated_at: '2021-12-26 21:13:27'
      },
      {
        id: 693,
        user_id: 1,
        date: '2021-06-26',
        customer: 'mix',
        seller: 'seller1',
        item: 2,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 11:51:48',
        updated_at: '2021-12-21 18:44:50'
      },
      {
        id: 694,
        user_id: 1,
        date: '2021-06-26',
        customer: 'mix',
        seller: 'seller2',
        item: 11,
        payments: 11,
        remarks: null,
        created_at: '2021-12-21 11:51:55',
        updated_at: '2022-04-13 09:02:15'
      },
      {
        id: 695,
        user_id: 1,
        date: '2021-06-27',
        customer: 'mix',
        seller: 'seller1',
        item: 23,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 18:39:35',
        updated_at: '2021-12-21 18:39:35'
      },
      {
        id: 696,
        user_id: 1,
        date: '2021-06-28',
        customer: 'mix',
        seller: 'seller1',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 18:39:56',
        updated_at: '2021-12-21 18:39:56'
      },
      {
        id: 697,
        user_id: 1,
        date: '2021-06-28',
        customer: 'mix',
        seller: 'seller2',
        item: 53,
        payments: 53,
        remarks: null,
        created_at: '2021-12-21 18:40:15',
        updated_at: '2022-04-13 09:02:28'
      },
      {
        id: 698,
        user_id: 1,
        date: '2021-06-29',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2021-12-21 18:40:37',
        updated_at: '2021-12-26 21:13:41'
      },
      {
        id: 699,
        user_id: 1,
        date: '2021-06-29',
        customer: 'mix',
        seller: 'seller1',
        item: 7,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 18:40:46',
        updated_at: '2021-12-21 18:40:46'
      },
      {
        id: 700,
        user_id: 1,
        date: '2021-06-29',
        customer: 'mix',
        seller: 'seller2',
        item: 13,
        payments: 7,
        remarks: null,
        created_at: '2021-12-21 18:40:57',
        updated_at: '2022-04-13 09:02:45'
      },
      {
        id: 701,
        user_id: 1,
        date: '2021-06-30',
        customer: 'mix',
        seller: 'station',
        item: 22,
        payments: 22,
        remarks: null,
        created_at: '2021-12-21 18:41:17',
        updated_at: '2021-12-26 21:13:51'
      },
      {
        id: 702,
        user_id: 1,
        date: '2021-06-30',
        customer: 'mix',
        seller: 'seller1',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 18:41:26',
        updated_at: '2021-12-21 18:41:26'
      },
      {
        id: 703,
        user_id: 1,
        date: '2021-06-30',
        customer: 'mix',
        seller: 'seller2',
        item: 31,
        payments: 31,
        remarks: null,
        created_at: '2021-12-21 18:41:41',
        updated_at: '2022-04-13 09:03:05'
      },
      {
        id: 704,
        user_id: 1,
        date: '2021-07-01',
        customer: 'mix',
        seller: 'station',
        item: 3,
        payments: 3,
        remarks: null,
        created_at: '2021-12-21 18:50:01',
        updated_at: '2021-12-26 21:16:44'
      },
      {
        id: 705,
        user_id: 1,
        date: '2021-07-01',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 18:50:09',
        updated_at: '2021-12-21 18:50:09'
      },
      {
        id: 706,
        user_id: 1,
        date: '2021-07-01',
        customer: 'mix',
        seller: 'seller2',
        item: 43,
        payments: 43,
        remarks: null,
        created_at: '2021-12-21 18:50:24',
        updated_at: '2022-04-13 09:04:35'
      },
      {
        id: 707,
        user_id: 1,
        date: '2021-07-02',
        customer: 'mix',
        seller: 'seller1',
        item: 12,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 18:50:47',
        updated_at: '2021-12-21 18:50:47'
      },
      {
        id: 708,
        user_id: 1,
        date: '2021-07-02',
        customer: 'mix',
        seller: 'seller2',
        item: 15,
        payments: 10,
        remarks: null,
        created_at: '2021-12-21 18:51:02',
        updated_at: '2022-04-13 09:04:48'
      },
      {
        id: 709,
        user_id: 1,
        date: '2021-07-03',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2021-12-21 18:51:29',
        updated_at: '2021-12-26 21:16:53'
      },
      {
        id: 710,
        user_id: 1,
        date: '2021-07-03',
        customer: 'mix',
        seller: 'seller1',
        item: 11,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 18:51:42',
        updated_at: '2021-12-21 18:51:42'
      },
      {
        id: 711,
        user_id: 1,
        date: '2021-07-04',
        customer: 'mix',
        seller: 'seller2',
        item: 25,
        payments: 25,
        remarks: null,
        created_at: '2021-12-21 18:52:08',
        updated_at: '2022-04-13 09:05:02'
      },
      {
        id: 712,
        user_id: 1,
        date: '2021-07-05',
        customer: 'mix',
        seller: 'seller1',
        item: 18,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 18:52:33',
        updated_at: '2021-12-21 18:52:33'
      },
      {
        id: 713,
        user_id: 1,
        date: '2021-07-05',
        customer: 'mix',
        seller: 'seller2',
        item: 28,
        payments: 28,
        remarks: null,
        created_at: '2021-12-21 18:52:45',
        updated_at: '2022-04-13 09:05:41'
      },
      {
        id: 715,
        user_id: 1,
        date: '2021-07-06',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 18:53:12',
        updated_at: '2021-12-21 18:53:12'
      },
      {
        id: 716,
        user_id: 1,
        date: '2021-07-06',
        customer: 'mix',
        seller: 'seller2',
        item: 6,
        payments: 6,
        remarks: null,
        created_at: '2021-12-21 18:53:21',
        updated_at: '2022-04-13 09:05:34'
      },
      {
        id: 717,
        user_id: 1,
        date: '2021-07-07',
        customer: 'mix',
        seller: 'station',
        item: 11,
        payments: 11,
        remarks: null,
        created_at: '2021-12-21 18:53:40',
        updated_at: '2021-12-26 21:18:27'
      },
      {
        id: 718,
        user_id: 1,
        date: '2021-07-07',
        customer: 'mix',
        seller: 'seller1',
        item: 7,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 18:53:51',
        updated_at: '2021-12-21 18:53:51'
      },
      {
        id: 719,
        user_id: 1,
        date: '2021-07-08',
        customer: 'mix',
        seller: 'station',
        item: 16,
        payments: 16,
        remarks: null,
        created_at: '2021-12-21 18:54:08',
        updated_at: '2021-12-26 21:20:28'
      },
      {
        id: 720,
        user_id: 1,
        date: '2021-07-08',
        customer: 'mix',
        seller: 'seller1',
        item: 14,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 18:54:16',
        updated_at: '2021-12-21 18:54:16'
      },
      {
        id: 721,
        user_id: 1,
        date: '2021-07-08',
        customer: 'mix',
        seller: 'seller2',
        item: 34,
        payments: 34,
        remarks: null,
        created_at: '2021-12-21 18:54:32',
        updated_at: '2022-04-13 09:05:58'
      },
      {
        id: 722,
        user_id: 1,
        date: '2021-07-09',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2021-12-21 18:55:05',
        updated_at: '2021-12-26 21:20:36'
      },
      {
        id: 723,
        user_id: 1,
        date: '2021-07-09',
        customer: 'mix',
        seller: 'seller1',
        item: 17,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 18:55:17',
        updated_at: '2021-12-21 18:55:17'
      },
      {
        id: 724,
        user_id: 1,
        date: '2021-07-09',
        customer: 'mix',
        seller: 'seller2',
        item: 20,
        payments: 20,
        remarks: null,
        created_at: '2021-12-21 18:55:27',
        updated_at: '2022-04-13 09:06:40'
      },
      {
        id: 725,
        user_id: 1,
        date: '2021-07-10',
        customer: 'mix',
        seller: 'seller1',
        item: 12,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 18:55:43',
        updated_at: '2021-12-21 18:55:43'
      },
      {
        id: 726,
        user_id: 1,
        date: '2021-07-10',
        customer: 'mix',
        seller: 'seller2',
        item: 14,
        payments: 14,
        remarks: null,
        created_at: '2021-12-21 18:55:51',
        updated_at: '2022-04-13 09:06:59'
      },
      {
        id: 727,
        user_id: 1,
        date: '2021-07-11',
        customer: 'mix',
        seller: 'station',
        item: 8,
        payments: 8,
        remarks: null,
        created_at: '2021-12-21 18:56:07',
        updated_at: '2021-12-26 21:20:46'
      },
      {
        id: 728,
        user_id: 1,
        date: '2021-07-11',
        customer: 'mix',
        seller: 'seller1',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 18:56:14',
        updated_at: '2021-12-21 18:56:14'
      },
      {
        id: 729,
        user_id: 1,
        date: '2021-07-11',
        customer: 'mix',
        seller: 'seller2',
        item: 14,
        payments: 14,
        remarks: null,
        created_at: '2021-12-21 18:56:26',
        updated_at: '2022-04-13 09:07:12'
      },
      {
        id: 730,
        user_id: 1,
        date: '2021-07-12',
        customer: 'mix',
        seller: 'seller1',
        item: 13,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 18:56:49',
        updated_at: '2021-12-21 18:56:49'
      },
      {
        id: 731,
        user_id: 1,
        date: '2021-07-12',
        customer: 'mix',
        seller: 'seller2',
        item: 9,
        payments: 9,
        remarks: null,
        created_at: '2021-12-21 18:57:01',
        updated_at: '2022-04-13 09:07:24'
      },
      {
        id: 732,
        user_id: 1,
        date: '2021-07-13',
        customer: 'mix',
        seller: 'station',
        item: 17,
        payments: 17,
        remarks: null,
        created_at: '2021-12-21 18:57:20',
        updated_at: '2021-12-26 21:21:01'
      },
      {
        id: 733,
        user_id: 1,
        date: '2021-07-13',
        customer: 'mix',
        seller: 'seller2',
        item: 17,
        payments: 17,
        remarks: null,
        created_at: '2021-12-21 18:57:29',
        updated_at: '2022-04-13 09:07:36'
      },
      {
        id: 734,
        user_id: 1,
        date: '2021-07-14',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2021-12-21 18:57:46',
        updated_at: '2021-12-26 21:21:11'
      },
      {
        id: 735,
        user_id: 1,
        date: '2021-07-14',
        customer: 'mix',
        seller: 'seller1',
        item: 9,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 18:57:55',
        updated_at: '2021-12-21 18:57:55'
      },
      {
        id: 736,
        user_id: 1,
        date: '2021-07-14',
        customer: 'mix',
        seller: 'seller2',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2021-12-21 18:58:09',
        updated_at: '2022-04-13 09:07:48'
      },
      {
        id: 737,
        user_id: 1,
        date: '2021-07-15',
        customer: 'mix',
        seller: 'seller1',
        item: 3,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 18:58:26',
        updated_at: '2021-12-21 18:58:26'
      },
      {
        id: 738,
        user_id: 1,
        date: '2021-07-15',
        customer: 'mix',
        seller: 'seller2',
        item: 16,
        payments: 16,
        remarks: null,
        created_at: '2021-12-21 18:58:36',
        updated_at: '2022-04-13 09:08:00'
      },
      {
        id: 739,
        user_id: 1,
        date: '2021-07-16',
        customer: 'mix',
        seller: 'station',
        item: 13,
        payments: 13,
        remarks: null,
        created_at: '2021-12-21 18:58:56',
        updated_at: '2021-12-26 21:21:25'
      },
      {
        id: 740,
        user_id: 1,
        date: '2021-07-16',
        customer: 'mix',
        seller: 'seller1',
        item: 8,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 18:59:06',
        updated_at: '2021-12-21 18:59:06'
      },
      {
        id: 741,
        user_id: 1,
        date: '2021-07-16',
        customer: 'mix',
        seller: 'seller2',
        item: 16,
        payments: 16,
        remarks: null,
        created_at: '2021-12-21 18:59:19',
        updated_at: '2022-04-13 09:08:19'
      },
      {
        id: 742,
        user_id: 1,
        date: '2021-07-17',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 18:59:40',
        updated_at: '2021-12-21 18:59:40'
      },
      {
        id: 743,
        user_id: 1,
        date: '2021-07-17',
        customer: 'mix',
        seller: 'seller2',
        item: 31,
        payments: 31,
        remarks: null,
        created_at: '2021-12-21 18:59:52',
        updated_at: '2022-04-13 09:08:34'
      },
      {
        id: 744,
        user_id: 1,
        date: '2021-07-18',
        customer: 'mix',
        seller: 'seller2',
        item: 38,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 19:00:07',
        updated_at: '2022-05-18 21:25:01'
      },
      {
        id: 745,
        user_id: 1,
        date: '2021-07-18',
        customer: 'mix',
        seller: 'seller1',
        item: 22,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 19:00:18',
        updated_at: '2021-12-21 19:00:18'
      },
      {
        id: 746,
        user_id: 1,
        date: '2021-07-19',
        customer: 'mix',
        seller: 'station',
        item: 11,
        payments: 11,
        remarks: null,
        created_at: '2021-12-21 19:00:35',
        updated_at: '2021-12-26 21:21:36'
      },
      {
        id: 747,
        user_id: 1,
        date: '2021-07-19',
        customer: 'mix',
        seller: 'seller1',
        item: 2,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 19:00:44',
        updated_at: '2021-12-21 19:00:44'
      },
      {
        id: 748,
        user_id: 1,
        date: '2021-07-19',
        customer: 'mix',
        seller: 'seller2',
        item: 8,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 19:00:52',
        updated_at: '2021-12-21 19:00:52'
      },
      {
        id: 749,
        user_id: 1,
        date: '2021-07-20',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2021-12-21 19:01:21',
        updated_at: '2021-12-26 21:23:50'
      },
      {
        id: 750,
        user_id: 1,
        date: '2021-07-20',
        customer: 'mix',
        seller: 'seller1',
        item: 7,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 19:01:31',
        updated_at: '2021-12-21 19:01:31'
      },
      {
        id: 751,
        user_id: 1,
        date: '2021-07-20',
        customer: 'mix',
        seller: 'seller2',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 19:01:38',
        updated_at: '2021-12-21 19:01:38'
      },
      {
        id: 752,
        user_id: 1,
        date: '2021-07-21',
        customer: 'mix',
        seller: 'station',
        item: 23,
        payments: 23,
        remarks: null,
        created_at: '2021-12-21 19:01:59',
        updated_at: '2021-12-26 21:25:05'
      },
      {
        id: 753,
        user_id: 1,
        date: '2021-07-21',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 19:02:14',
        updated_at: '2021-12-21 19:02:14'
      },
      {
        id: 754,
        user_id: 1,
        date: '2021-07-21',
        customer: 'mix',
        seller: 'seller2',
        item: 14,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 19:02:23',
        updated_at: '2021-12-21 19:02:23'
      },
      {
        id: 755,
        user_id: 1,
        date: '2021-07-22',
        customer: 'mix',
        seller: 'seller2',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 19:02:49',
        updated_at: '2021-12-21 19:02:49'
      },
      {
        id: 756,
        user_id: 1,
        date: '2021-07-22',
        customer: 'mix',
        seller: 'seller1',
        item: 9,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 19:02:57',
        updated_at: '2021-12-21 19:02:57'
      },
      {
        id: 757,
        user_id: 1,
        date: '2021-07-23',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2021-12-21 19:03:13',
        updated_at: '2021-12-26 21:25:19'
      },
      {
        id: 758,
        user_id: 1,
        date: '2021-07-23',
        customer: 'mix',
        seller: 'seller1',
        item: 14,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 19:03:23',
        updated_at: '2021-12-21 19:03:23'
      },
      {
        id: 759,
        user_id: 1,
        date: '2021-07-23',
        customer: 'mix',
        seller: 'seller2',
        item: 9,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 19:03:32',
        updated_at: '2021-12-21 19:05:34'
      },
      {
        id: 760,
        user_id: 1,
        date: '2021-07-24',
        customer: 'mix',
        seller: 'seller1',
        item: 26,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 19:06:04',
        updated_at: '2021-12-21 19:06:04'
      },
      {
        id: 761,
        user_id: 1,
        date: '2021-07-24',
        customer: 'mix',
        seller: 'seller2',
        item: 19,
        payments: 0,
        remarks: '100pcs container',
        created_at: '2021-12-21 19:06:24',
        updated_at: '2022-05-18 21:27:45'
      },
      {
        id: 762,
        user_id: 1,
        date: '2021-07-25',
        customer: 'mix',
        seller: 'seller2',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2021-12-21 19:06:41',
        updated_at: '2022-04-13 10:39:58'
      },
      {
        id: 763,
        user_id: 1,
        date: '2021-07-26',
        customer: 'mix',
        seller: 'station',
        item: 20,
        payments: 20,
        remarks: null,
        created_at: '2021-12-21 19:07:01',
        updated_at: '2021-12-26 21:25:46'
      },
      {
        id: 764,
        user_id: 1,
        date: '2021-07-26',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 19:07:09',
        updated_at: '2021-12-21 19:07:09'
      },
      {
        id: 765,
        user_id: 1,
        date: '2021-07-26',
        customer: 'mix',
        seller: 'seller2',
        item: 10,
        payments: 8,
        remarks: null,
        created_at: '2021-12-21 19:07:14',
        updated_at: '2022-04-13 10:40:10'
      },
      {
        id: 766,
        user_id: 1,
        date: '2021-07-27',
        customer: 'mix',
        seller: 'station',
        item: 22,
        payments: 22,
        remarks: null,
        created_at: '2021-12-21 19:07:29',
        updated_at: '2021-12-26 21:26:53'
      },
      {
        id: 767,
        user_id: 1,
        date: '2021-07-27',
        customer: 'mix',
        seller: 'seller2',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2021-12-21 19:07:41',
        updated_at: '2022-04-13 10:42:39'
      },
      {
        id: 768,
        user_id: 1,
        date: '2021-07-28',
        customer: 'mix',
        seller: 'seller2',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2021-12-21 19:08:00',
        updated_at: '2022-04-13 10:42:52'
      },
      {
        id: 769,
        user_id: 1,
        date: '2021-07-28',
        customer: 'mix',
        seller: 'seller1',
        item: 23,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 19:08:10',
        updated_at: '2021-12-21 19:08:10'
      },
      {
        id: 770,
        user_id: 1,
        date: '2021-07-29',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2021-12-21 19:08:26',
        updated_at: '2021-12-26 21:27:06'
      },
      {
        id: 771,
        user_id: 1,
        date: '2021-07-29',
        customer: 'mix',
        seller: 'seller2',
        item: 22,
        payments: 22,
        remarks: null,
        created_at: '2021-12-21 19:08:39',
        updated_at: '2022-04-13 10:43:14'
      },
      {
        id: 772,
        user_id: 1,
        date: '2021-07-30',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2021-12-21 19:08:54',
        updated_at: '2021-12-26 21:27:19'
      },
      {
        id: 773,
        user_id: 1,
        date: '2021-07-30',
        customer: 'mix',
        seller: 'seller1',
        item: 9,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 19:09:06',
        updated_at: '2021-12-21 19:09:06'
      },
      {
        id: 774,
        user_id: 1,
        date: '2021-07-30',
        customer: 'mix',
        seller: 'seller2',
        item: 14,
        payments: 14,
        remarks: null,
        created_at: '2021-12-21 19:09:14',
        updated_at: '2022-04-13 10:43:23'
      },
      {
        id: 775,
        user_id: 1,
        date: '2021-07-31',
        customer: 'mix',
        seller: 'station',
        item: 16,
        payments: 16,
        remarks: null,
        created_at: '2021-12-21 19:09:29',
        updated_at: '2021-12-26 21:27:33'
      },
      {
        id: 776,
        user_id: 1,
        date: '2021-07-31',
        customer: 'mix',
        seller: 'seller1',
        item: 24,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 19:09:38',
        updated_at: '2021-12-21 19:09:38'
      },
      {
        id: 777,
        user_id: 1,
        date: '2021-07-31',
        customer: 'mix',
        seller: 'seller2',
        item: 9,
        payments: 9,
        remarks: null,
        created_at: '2021-12-21 19:09:50',
        updated_at: '2022-04-13 10:43:33'
      },
      {
        id: 778,
        user_id: 1,
        date: '2021-08-01',
        customer: 'mix',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2021-12-21 19:13:15',
        updated_at: '2021-12-26 21:36:04'
      },
      {
        id: 779,
        user_id: 1,
        date: '2021-08-02',
        customer: 'mix',
        seller: 'station',
        item: 6,
        payments: 6,
        remarks: null,
        created_at: '2021-12-21 19:13:31',
        updated_at: '2021-12-26 21:36:41'
      },
      {
        id: 780,
        user_id: 1,
        date: '2021-08-03',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2021-12-21 19:13:47',
        updated_at: '2021-12-26 21:36:59'
      },
      {
        id: 781,
        user_id: 1,
        date: '2021-08-04',
        customer: 'mix',
        seller: 'station',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2021-12-21 19:14:02',
        updated_at: '2021-12-26 21:39:23'
      },
      {
        id: 782,
        user_id: 1,
        date: '2021-08-06',
        customer: 'mix',
        seller: 'station',
        item: 26,
        payments: 26,
        remarks: null,
        created_at: '2021-12-21 19:14:18',
        updated_at: '2021-12-26 21:40:08'
      },
      {
        id: 783,
        user_id: 1,
        date: '2021-08-08',
        customer: 'mix',
        seller: 'station',
        item: 13,
        payments: 13,
        remarks: null,
        created_at: '2021-12-21 19:14:37',
        updated_at: '2021-12-26 21:40:22'
      },
      {
        id: 784,
        user_id: 1,
        date: '2021-08-12',
        customer: 'mix',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2021-12-21 19:14:53',
        updated_at: '2021-12-26 21:40:34'
      },
      {
        id: 785,
        user_id: 1,
        date: '2021-08-14',
        customer: 'mix',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2021-12-21 19:15:05',
        updated_at: '2021-12-26 21:40:45'
      },
      {
        id: 786,
        user_id: 1,
        date: '2021-08-15',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2021-12-21 19:15:16',
        updated_at: '2021-12-26 21:42:25'
      },
      {
        id: 787,
        user_id: 1,
        date: '2021-08-16',
        customer: 'mix',
        seller: 'station',
        item: 28,
        payments: 28,
        remarks: null,
        created_at: '2021-12-21 19:15:31',
        updated_at: '2021-12-26 21:42:55'
      },
      {
        id: 788,
        user_id: 1,
        date: '2021-08-17',
        customer: 'mix',
        seller: 'station',
        item: 9,
        payments: 9,
        remarks: null,
        created_at: '2021-12-21 19:15:46',
        updated_at: '2021-12-26 21:43:11'
      },
      {
        id: 789,
        user_id: 1,
        date: '2021-08-20',
        customer: 'mix',
        seller: 'station',
        item: 11,
        payments: 11,
        remarks: null,
        created_at: '2021-12-21 19:16:01',
        updated_at: '2021-12-26 21:43:29'
      },
      {
        id: 790,
        user_id: 1,
        date: '2021-08-22',
        customer: 'mix',
        seller: 'station',
        item: 9,
        payments: 9,
        remarks: null,
        created_at: '2021-12-21 19:16:16',
        updated_at: '2021-12-26 21:43:40'
      },
      {
        id: 791,
        user_id: 1,
        date: '2021-08-24',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2021-12-21 19:16:27',
        updated_at: '2021-12-26 21:43:46'
      },
      {
        id: 792,
        user_id: 1,
        date: '2021-08-25',
        customer: 'mix',
        seller: 'station',
        item: 17,
        payments: 17,
        remarks: null,
        created_at: '2021-12-21 19:16:46',
        updated_at: '2021-12-26 21:44:15'
      },
      {
        id: 793,
        user_id: 1,
        date: '2021-08-26',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2021-12-21 19:17:01',
        updated_at: '2021-12-26 21:44:24'
      },
      {
        id: 794,
        user_id: 1,
        date: '2021-08-27',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2021-12-21 19:17:16',
        updated_at: '2021-12-26 21:44:46'
      },
      {
        id: 795,
        user_id: 1,
        date: '2021-08-28',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2021-12-21 19:17:26',
        updated_at: '2021-12-26 21:44:52'
      },
      {
        id: 796,
        user_id: 1,
        date: '2021-08-30',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2021-12-21 19:17:46',
        updated_at: '2021-12-26 21:45:48'
      },
      {
        id: 797,
        user_id: 1,
        date: '2021-08-01',
        customer: 'mix',
        seller: 'seller1',
        item: 13,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 19:20:02',
        updated_at: '2021-12-21 19:20:02'
      },
      {
        id: 798,
        user_id: 1,
        date: '2021-08-02',
        customer: 'mix',
        seller: 'seller1',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 19:20:21',
        updated_at: '2021-12-21 19:20:21'
      },
      {
        id: 799,
        user_id: 1,
        date: '2021-08-03',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 19:20:39',
        updated_at: '2021-12-21 19:20:39'
      },
      {
        id: 800,
        user_id: 1,
        date: '2021-08-04',
        customer: 'mix',
        seller: 'seller1',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 19:21:08',
        updated_at: '2021-12-21 19:21:08'
      },
      {
        id: 801,
        user_id: 1,
        date: '2021-08-05',
        customer: 'mix',
        seller: 'seller1',
        item: 27,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 19:21:55',
        updated_at: '2021-12-21 19:21:55'
      },
      {
        id: 802,
        user_id: 1,
        date: '2021-08-06',
        customer: 'mix',
        seller: 'seller1',
        item: 2,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 19:22:14',
        updated_at: '2021-12-21 19:22:14'
      },
      {
        id: 803,
        user_id: 1,
        date: '2021-08-07',
        customer: 'mix',
        seller: 'seller1',
        item: 23,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 19:22:37',
        updated_at: '2021-12-21 19:22:37'
      },
      {
        id: 804,
        user_id: 1,
        date: '2021-08-08',
        customer: 'mix',
        seller: 'seller1',
        item: 9,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 19:22:52',
        updated_at: '2021-12-21 19:22:52'
      },
      {
        id: 805,
        user_id: 1,
        date: '2021-08-09',
        customer: 'mix',
        seller: 'seller1',
        item: 9,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 19:23:10',
        updated_at: '2021-12-21 19:23:10'
      },
      {
        id: 806,
        user_id: 1,
        date: '2021-08-10',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 19:23:26',
        updated_at: '2021-12-21 19:23:26'
      },
      {
        id: 807,
        user_id: 1,
        date: '2021-08-11',
        customer: 'mix',
        seller: 'seller1',
        item: 24,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 19:23:48',
        updated_at: '2021-12-21 19:24:45'
      },
      {
        id: 808,
        user_id: 1,
        date: '2021-08-12',
        customer: 'mix',
        seller: 'seller1',
        item: 11,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 19:25:01',
        updated_at: '2021-12-21 19:25:41'
      },
      {
        id: 809,
        user_id: 1,
        date: '2021-08-14',
        customer: 'mix',
        seller: 'seller1',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 19:26:03',
        updated_at: '2021-12-21 19:26:03'
      },
      {
        id: 810,
        user_id: 1,
        date: '2021-08-15',
        customer: 'mix',
        seller: 'seller1',
        item: 13,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 19:26:24',
        updated_at: '2021-12-21 19:26:24'
      },
      {
        id: 811,
        user_id: 1,
        date: '2021-08-16',
        customer: 'mix',
        seller: 'seller1',
        item: 17,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 19:26:42',
        updated_at: '2021-12-21 19:27:09'
      },
      {
        id: 812,
        user_id: 1,
        date: '2021-08-17',
        customer: 'mix',
        seller: 'seller1',
        item: 18,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 19:27:46',
        updated_at: '2021-12-21 19:27:46'
      },
      {
        id: 813,
        user_id: 1,
        date: '2021-08-19',
        customer: 'mix',
        seller: 'seller1',
        item: 13,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 19:28:22',
        updated_at: '2021-12-21 19:28:22'
      },
      {
        id: 814,
        user_id: 1,
        date: '2021-08-21',
        customer: 'mix',
        seller: 'seller1',
        item: 12,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 19:28:46',
        updated_at: '2021-12-21 19:28:46'
      },
      {
        id: 815,
        user_id: 1,
        date: '2021-08-22',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 19:29:05',
        updated_at: '2021-12-21 19:29:05'
      },
      {
        id: 816,
        user_id: 1,
        date: '2021-08-23',
        customer: 'mix',
        seller: 'seller1',
        item: 40,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 19:29:32',
        updated_at: '2021-12-21 19:30:21'
      },
      {
        id: 817,
        user_id: 1,
        date: '2021-08-24',
        customer: 'mix',
        seller: 'seller1',
        item: 9,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 19:31:00',
        updated_at: '2021-12-21 19:31:00'
      },
      {
        id: 818,
        user_id: 1,
        date: '2021-08-28',
        customer: 'mix',
        seller: 'seller1',
        item: 11,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 19:31:24',
        updated_at: '2021-12-21 19:31:24'
      },
      {
        id: 819,
        user_id: 1,
        date: '2021-08-29',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 19:31:42',
        updated_at: '2021-12-21 19:31:42'
      },
      {
        id: 820,
        user_id: 1,
        date: '2021-08-30',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 19:32:05',
        updated_at: '2021-12-21 19:32:05'
      },
      {
        id: 821,
        user_id: 1,
        date: '2021-08-31',
        customer: 'mix',
        seller: 'seller1',
        item: 21,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 19:32:44',
        updated_at: '2021-12-21 19:32:44'
      },
      {
        id: 822,
        user_id: 1,
        date: '2021-08-01',
        customer: 'mix',
        seller: 'seller2',
        item: 23,
        payments: 23,
        remarks: null,
        created_at: '2021-12-21 19:34:00',
        updated_at: '2022-04-13 10:44:17'
      },
      {
        id: 823,
        user_id: 1,
        date: '2021-08-02',
        customer: 'mix',
        seller: 'seller2',
        item: 22,
        payments: 22,
        remarks: null,
        created_at: '2021-12-21 19:36:41',
        updated_at: '2022-04-13 10:44:25'
      },
      {
        id: 824,
        user_id: 1,
        date: '2021-08-03',
        customer: 'mix',
        seller: 'seller2',
        item: 9,
        payments: 9,
        remarks: null,
        created_at: '2021-12-21 19:36:57',
        updated_at: '2022-04-13 10:44:39'
      },
      {
        id: 825,
        user_id: 1,
        date: '2021-08-04',
        customer: 'mix',
        seller: 'seller2',
        item: 12,
        payments: 12,
        remarks: null,
        created_at: '2021-12-21 19:37:20',
        updated_at: '2022-04-13 10:44:48'
      },
      {
        id: 826,
        user_id: 1,
        date: '2021-08-05',
        customer: 'mix',
        seller: 'seller2',
        item: 52,
        payments: 52,
        remarks: null,
        created_at: '2021-12-21 19:37:55',
        updated_at: '2022-04-13 10:44:59'
      },
      {
        id: 827,
        user_id: 1,
        date: '2021-08-06',
        customer: 'mix',
        seller: 'seller2',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2021-12-21 19:39:05',
        updated_at: '2022-04-13 10:45:10'
      },
      {
        id: 828,
        user_id: 1,
        date: '2021-08-08',
        customer: 'mix',
        seller: 'seller2',
        item: 34,
        payments: 34,
        remarks: null,
        created_at: '2021-12-21 19:39:29',
        updated_at: '2022-04-13 10:45:49'
      },
      {
        id: 829,
        user_id: 1,
        date: '2021-08-09',
        customer: 'mix',
        seller: 'seller2',
        item: 14,
        payments: 14,
        remarks: 'standby 4',
        created_at: '2021-12-21 19:41:14',
        updated_at: '2022-04-13 10:46:00'
      },
      {
        id: 830,
        user_id: 1,
        date: '2021-08-10',
        customer: 'mix',
        seller: 'seller2',
        item: 21,
        payments: 21,
        remarks: null,
        created_at: '2021-12-21 19:41:33',
        updated_at: '2022-04-13 10:46:09'
      },
      {
        id: 831,
        user_id: 1,
        date: '2021-08-11',
        customer: 'mix',
        seller: 'seller2',
        item: 23,
        payments: 23,
        remarks: null,
        created_at: '2021-12-21 19:41:50',
        updated_at: '2022-04-13 10:46:24'
      },
      {
        id: 832,
        user_id: 1,
        date: '2021-08-12',
        customer: 'mix',
        seller: 'seller2',
        item: 19,
        payments: 19,
        remarks: 'standby 2',
        created_at: '2021-12-21 19:42:30',
        updated_at: '2022-04-13 10:46:35'
      },
      {
        id: 833,
        user_id: 1,
        date: '2021-08-13',
        customer: 'mix',
        seller: 'seller2',
        item: 6,
        payments: 6,
        remarks: 'standby 4',
        created_at: '2021-12-21 19:45:08',
        updated_at: '2022-04-13 10:46:47'
      },
      {
        id: 834,
        user_id: 1,
        date: '2021-08-14',
        customer: 'mix',
        seller: 'seller2',
        item: 11,
        payments: 11,
        remarks: null,
        created_at: '2021-12-21 19:46:18',
        updated_at: '2022-04-13 10:47:02'
      },
      {
        id: 835,
        user_id: 1,
        date: '2021-08-16',
        customer: 'mix',
        seller: 'seller2',
        item: 17,
        payments: 17,
        remarks: null,
        created_at: '2021-12-21 19:46:39',
        updated_at: '2022-04-13 10:47:23'
      },
      {
        id: 836,
        user_id: 1,
        date: '2021-08-15',
        customer: 'mix',
        seller: 'seller2',
        item: 9,
        payments: 9,
        remarks: null,
        created_at: '2021-12-21 19:46:59',
        updated_at: '2022-04-13 10:47:13'
      },
      {
        id: 837,
        user_id: 1,
        date: '2021-08-17',
        customer: 'mix',
        seller: 'seller2',
        item: 5,
        payments: 5,
        remarks: null,
        created_at: '2021-12-21 19:47:15',
        updated_at: '2022-04-13 10:47:50'
      },
      {
        id: 838,
        user_id: 1,
        date: '2021-08-19',
        customer: 'mix',
        seller: 'seller2',
        item: 6,
        payments: 6,
        remarks: 'standby 2',
        created_at: '2021-12-21 19:47:46',
        updated_at: '2022-04-13 10:48:03'
      },
      {
        id: 839,
        user_id: 1,
        date: '2021-08-20',
        customer: 'mix',
        seller: 'seller2',
        item: 9,
        payments: 9,
        remarks: 'standby 1',
        created_at: '2021-12-21 19:48:35',
        updated_at: '2022-04-13 10:48:14'
      },
      {
        id: 840,
        user_id: 1,
        date: '2021-08-21',
        customer: 'mix',
        seller: 'seller2',
        item: 24,
        payments: 24,
        remarks: 'standby 2',
        created_at: '2021-12-21 19:50:05',
        updated_at: '2022-04-13 10:48:27'
      },
      {
        id: 841,
        user_id: 1,
        date: '2021-08-22',
        customer: 'mix',
        seller: 'seller2',
        item: 34,
        payments: 0,
        remarks: 'standby 2',
        created_at: '2021-12-21 19:50:43',
        updated_at: '2022-05-18 21:27:24'
      },
      {
        id: 842,
        user_id: 1,
        date: '2021-08-23',
        customer: 'mix',
        seller: 'seller2',
        item: 17,
        payments: 17,
        remarks: 'standby 4',
        created_at: '2021-12-21 19:51:04',
        updated_at: '2022-04-13 10:48:49'
      },
      {
        id: 843,
        user_id: 1,
        date: '2021-08-24',
        customer: 'mix',
        seller: 'seller2',
        item: 12,
        payments: 12,
        remarks: '\n',
        created_at: '2021-12-21 19:52:46',
        updated_at: '2022-04-13 10:49:54'
      },
      {
        id: 844,
        user_id: 1,
        date: '2021-08-25',
        customer: 'mix',
        seller: 'seller2',
        item: 20,
        payments: 20,
        remarks: null,
        created_at: '2021-12-21 19:53:21',
        updated_at: '2022-04-13 10:50:11'
      },
      {
        id: 845,
        user_id: 1,
        date: '2021-08-26',
        customer: 'mix',
        seller: 'seller2',
        item: 20,
        payments: 20,
        remarks: null,
        created_at: '2021-12-21 19:54:22',
        updated_at: '2022-04-13 10:50:21'
      },
      {
        id: 846,
        user_id: 1,
        date: '2021-08-27',
        customer: 'mix',
        seller: 'seller2',
        item: 14,
        payments: 14,
        remarks: null,
        created_at: '2021-12-21 19:54:46',
        updated_at: '2022-04-13 10:50:34'
      },
      {
        id: 847,
        user_id: 1,
        date: '2021-08-28',
        customer: 'mix',
        seller: 'seller2',
        item: 16,
        payments: 16,
        remarks: null,
        created_at: '2021-12-21 19:55:07',
        updated_at: '2022-04-13 10:50:44'
      },
      {
        id: 848,
        user_id: 1,
        date: '2021-08-30',
        customer: 'mix',
        seller: 'seller2',
        item: 15,
        payments: 15,
        remarks: null,
        created_at: '2021-12-21 19:55:39',
        updated_at: '2022-04-13 10:50:52'
      },
      {
        id: 849,
        user_id: 1,
        date: '2021-08-31',
        customer: 'mix',
        seller: 'seller2',
        item: 5,
        payments: 5,
        remarks: null,
        created_at: '2021-12-21 19:55:56',
        updated_at: '2022-04-13 10:51:03'
      },
      {
        id: 850,
        user_id: 1,
        date: '2021-09-01',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2021-12-21 19:59:26',
        updated_at: '2021-12-21 19:59:26'
      },
      {
        id: 851,
        user_id: 1,
        date: '2021-09-02',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2021-12-21 20:00:30',
        updated_at: '2021-12-26 21:49:33'
      },
      {
        id: 852,
        user_id: 1,
        date: '2021-09-04',
        customer: 'mix',
        seller: 'station',
        item: 14,
        payments: 14,
        remarks: null,
        created_at: '2021-12-21 20:00:57',
        updated_at: '2021-12-21 20:00:57'
      },
      {
        id: 853,
        user_id: 1,
        date: '2021-09-06',
        customer: 'mix',
        seller: 'station',
        item: 24,
        payments: 24,
        remarks: null,
        created_at: '2021-12-21 20:01:26',
        updated_at: '2021-12-21 20:01:26'
      },
      {
        id: 854,
        user_id: 1,
        date: '2021-09-11',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2021-12-21 20:01:54',
        updated_at: '2021-12-21 20:01:54'
      },
      {
        id: 855,
        user_id: 1,
        date: '2021-09-12',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2021-12-21 20:02:12',
        updated_at: '2021-12-21 20:02:12'
      },
      {
        id: 856,
        user_id: 1,
        date: '2021-09-13',
        customer: 'mix',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2021-12-21 20:02:26',
        updated_at: '2021-12-21 20:02:26'
      },
      {
        id: 857,
        user_id: 1,
        date: '2021-09-14',
        customer: 'mix',
        seller: 'station',
        item: 22,
        payments: 22,
        remarks: null,
        created_at: '2021-12-21 20:02:53',
        updated_at: '2021-12-21 20:02:53'
      },
      {
        id: 858,
        user_id: 1,
        date: '2021-09-15',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2021-12-21 20:03:16',
        updated_at: '2021-12-21 20:03:16'
      },
      {
        id: 859,
        user_id: 1,
        date: '2021-09-16',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2021-12-21 20:03:35',
        updated_at: '2021-12-21 20:03:35'
      },
      {
        id: 860,
        user_id: 1,
        date: '2021-09-18',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2021-12-21 20:03:53',
        updated_at: '2021-12-21 20:03:53'
      },
      {
        id: 861,
        user_id: 1,
        date: '2021-09-20',
        customer: 'mix',
        seller: 'station',
        item: 27,
        payments: 27,
        remarks: null,
        created_at: '2021-12-21 20:04:19',
        updated_at: '2021-12-21 20:04:19'
      },
      {
        id: 862,
        user_id: 1,
        date: '2021-09-21',
        customer: 'mix',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2021-12-21 20:04:54',
        updated_at: '2021-12-21 20:04:54'
      },
      {
        id: 863,
        user_id: 1,
        date: '2021-09-22',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2021-12-21 20:05:23',
        updated_at: '2021-12-21 20:05:23'
      },
      {
        id: 865,
        user_id: 1,
        date: '2021-02-02',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2021-12-21 20:21:50',
        updated_at: '2021-12-21 20:22:27'
      },
      {
        id: 866,
        user_id: 1,
        date: '2021-02-03',
        customer: 'Lucban',
        seller: 'station',
        item: 20,
        payments: 20,
        remarks: 'basyo 24',
        created_at: '2021-12-21 20:26:54',
        updated_at: '2021-12-21 20:33:42'
      },
      {
        id: 868,
        user_id: 1,
        date: '2021-02-05',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2021-12-21 21:15:50',
        updated_at: '2021-12-21 21:15:50'
      },
      {
        id: 869,
        user_id: 1,
        date: '2021-02-06',
        customer: 'mix',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2021-12-21 21:16:08',
        updated_at: '2021-12-21 21:16:08'
      },
      {
        id: 870,
        user_id: 1,
        date: '2021-02-10',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2021-12-21 21:16:24',
        updated_at: '2021-12-21 21:16:24'
      },
      {
        id: 871,
        user_id: 1,
        date: '2021-02-11',
        customer: 'mix',
        seller: 'station',
        item: 10,
        payments: 31,
        remarks: null,
        created_at: '2021-12-21 21:17:00',
        updated_at: '2021-12-22 06:00:22'
      },
      {
        id: 872,
        user_id: 1,
        date: '2021-02-12',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2021-12-21 21:17:28',
        updated_at: '2021-12-21 21:17:28'
      },
      {
        id: 873,
        user_id: 1,
        date: '2021-02-13',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2021-12-21 21:17:43',
        updated_at: '2021-12-21 21:17:43'
      },
      {
        id: 874,
        user_id: 1,
        date: '2021-02-15',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2021-12-21 21:18:00',
        updated_at: '2021-12-21 21:18:00'
      },
      {
        id: 875,
        user_id: 1,
        date: '2021-02-16',
        customer: 'mix',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2021-12-21 21:18:18',
        updated_at: '2021-12-21 21:18:18'
      },
      {
        id: 876,
        user_id: 1,
        date: '2021-02-17',
        customer: 'mix',
        seller: 'station',
        item: 3,
        payments: 3,
        remarks: null,
        created_at: '2021-12-21 21:18:39',
        updated_at: '2021-12-21 21:18:39'
      },
      {
        id: 877,
        user_id: 1,
        date: '2021-02-19',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2021-12-21 21:18:54',
        updated_at: '2021-12-21 21:18:54'
      },
      {
        id: 878,
        user_id: 1,
        date: '2021-02-20',
        customer: 'B.Gerry',
        seller: 'station',
        item: 22,
        payments: 22,
        remarks: null,
        created_at: '2021-12-21 21:19:15',
        updated_at: '2021-12-22 06:02:19'
      },
      {
        id: 879,
        user_id: 1,
        date: '2021-02-21',
        customer: 'mix',
        seller: 'station',
        item: 3,
        payments: 3,
        remarks: null,
        created_at: '2021-12-21 21:19:35',
        updated_at: '2021-12-21 21:19:35'
      },
      {
        id: 880,
        user_id: 1,
        date: '2021-02-22',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2021-12-21 21:19:51',
        updated_at: '2021-12-21 21:19:51'
      },
      {
        id: 881,
        user_id: 1,
        date: '2021-02-25',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2021-12-21 21:20:40',
        updated_at: '2021-12-26 17:52:40'
      },
      {
        id: 882,
        user_id: 1,
        date: '2021-02-26',
        customer: 'mix',
        seller: 'station',
        item: 6,
        payments: 6,
        remarks: null,
        created_at: '2021-12-21 21:21:12',
        updated_at: '2021-12-21 21:21:12'
      },
      {
        id: 883,
        user_id: 1,
        date: '2021-02-27',
        customer: 'mix',
        seller: 'station',
        item: 3,
        payments: 3,
        remarks: null,
        created_at: '2021-12-21 21:21:30',
        updated_at: '2021-12-21 21:21:30'
      },
      {
        id: 884,
        user_id: 1,
        date: '2021-02-25',
        customer: 'Lucban',
        seller: 'station',
        item: 25,
        payments: 24,
        remarks: null,
        created_at: '2021-12-21 21:31:34',
        updated_at: '2021-12-22 06:05:27'
      },
      {
        id: 885,
        user_id: 1,
        date: '2021-02-25',
        customer: 'Tayabas',
        seller: 'station',
        item: 18,
        payments: 25,
        remarks: null,
        created_at: '2021-12-21 21:32:01',
        updated_at: '2021-12-22 06:06:18'
      },
      {
        id: 886,
        user_id: 1,
        date: '2021-02-11',
        customer: 'Lucban',
        seller: 'station',
        item: 21,
        payments: 0,
        remarks: null,
        created_at: '2021-12-21 21:38:12',
        updated_at: '2021-12-21 21:38:12'
      },
      {
        id: 887,
        user_id: 1,
        date: '2021-03-04',
        customer: 'mix',
        seller: 'station',
        item: 7,
        payments: 7,
        remarks: null,
        created_at: '2021-12-26 18:04:38',
        updated_at: '2021-12-26 18:04:38'
      },
      {
        id: 888,
        user_id: 1,
        date: '2021-03-06',
        customer: 'mix',
        seller: 'station',
        item: 3,
        payments: 3,
        remarks: null,
        created_at: '2021-12-26 18:06:37',
        updated_at: '2021-12-26 18:06:37'
      },
      {
        id: 889,
        user_id: 1,
        date: '2021-03-07',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2021-12-26 18:06:54',
        updated_at: '2021-12-26 18:06:54'
      },
      {
        id: 890,
        user_id: 1,
        date: '2021-03-09',
        customer: 'mix',
        seller: 'station',
        item: 15,
        payments: 15,
        remarks: null,
        created_at: '2021-12-26 18:07:17',
        updated_at: '2021-12-26 18:07:17'
      },
      {
        id: 891,
        user_id: 1,
        date: '2021-03-12',
        customer: 'mix',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2021-12-26 18:07:40',
        updated_at: '2021-12-26 18:17:38'
      },
      {
        id: 892,
        user_id: 1,
        date: '2021-03-13',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2021-12-26 18:08:11',
        updated_at: '2021-12-26 18:08:11'
      },
      {
        id: 893,
        user_id: 1,
        date: '2021-03-14',
        customer: 'mix',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2021-12-26 18:08:28',
        updated_at: '2021-12-26 18:08:28'
      },
      {
        id: 894,
        user_id: 1,
        date: '2021-03-16',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2021-12-26 18:08:54',
        updated_at: '2021-12-26 18:08:54'
      },
      {
        id: 895,
        user_id: 1,
        date: '2021-03-18',
        customer: 'mix',
        seller: 'station',
        item: 15,
        payments: 15,
        remarks: null,
        created_at: '2021-12-26 18:09:53',
        updated_at: '2021-12-26 18:10:58'
      },
      {
        id: 896,
        user_id: 1,
        date: '2021-03-19',
        customer: 'mix',
        seller: 'station',
        item: 9,
        payments: 9,
        remarks: null,
        created_at: '2021-12-26 18:10:38',
        updated_at: '2021-12-26 18:10:38'
      },
      {
        id: 897,
        user_id: 1,
        date: '2021-03-20',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2021-12-26 18:11:30',
        updated_at: '2021-12-26 18:11:30'
      },
      {
        id: 898,
        user_id: 1,
        date: '2021-03-21',
        customer: 'mix',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2021-12-26 18:11:51',
        updated_at: '2021-12-26 18:11:51'
      },
      {
        id: 899,
        user_id: 1,
        date: '2021-03-24',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2021-12-26 18:13:40',
        updated_at: '2021-12-26 18:13:40'
      },
      {
        id: 900,
        user_id: 1,
        date: '2021-03-27',
        customer: 'mix',
        seller: 'station',
        item: 12,
        payments: 12,
        remarks: null,
        created_at: '2021-12-26 18:14:07',
        updated_at: '2021-12-26 18:14:07'
      },
      {
        id: 901,
        user_id: 1,
        date: '2021-03-28',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2021-12-26 18:14:31',
        updated_at: '2021-12-26 18:14:31'
      },
      {
        id: 902,
        user_id: 1,
        date: '2021-03-29',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2021-12-26 18:14:46',
        updated_at: '2021-12-26 18:14:46'
      },
      {
        id: 903,
        user_id: 1,
        date: '2021-03-31',
        customer: 'mix',
        seller: 'station',
        item: 25,
        payments: 25,
        remarks: null,
        created_at: '2021-12-26 18:15:32',
        updated_at: '2021-12-26 18:15:32'
      },
      {
        id: 904,
        user_id: 1,
        date: '2021-04-01',
        customer: 'mix',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2021-12-26 18:44:05',
        updated_at: '2021-12-26 18:44:05'
      },
      {
        id: 905,
        user_id: 1,
        date: '2021-04-02',
        customer: 'mix',
        seller: 'station',
        item: 8,
        payments: 8,
        remarks: null,
        created_at: '2021-12-26 18:45:06',
        updated_at: '2021-12-26 18:45:06'
      },
      {
        id: 906,
        user_id: 1,
        date: '2021-04-08',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2021-12-26 18:45:33',
        updated_at: '2021-12-26 18:45:33'
      },
      {
        id: 907,
        user_id: 1,
        date: '2021-04-09',
        customer: 'mix',
        seller: 'station',
        item: 9,
        payments: 9,
        remarks: null,
        created_at: '2021-12-26 18:47:39',
        updated_at: '2021-12-26 18:47:39'
      },
      {
        id: 908,
        user_id: 1,
        date: '2021-04-09',
        customer: 'Bro.Gerry',
        seller: 'station',
        item: 20,
        payments: 20,
        remarks: null,
        created_at: '2021-12-26 18:48:14',
        updated_at: '2021-12-26 18:48:14'
      },
      {
        id: 909,
        user_id: 1,
        date: '2021-04-11',
        customer: 'mix',
        seller: 'station',
        item: 3,
        payments: 3,
        remarks: null,
        created_at: '2021-12-26 18:49:02',
        updated_at: '2021-12-26 18:49:02'
      },
      {
        id: 911,
        user_id: 1,
        date: '2021-04-13',
        customer: 'Tayabas',
        seller: 'station',
        item: 20,
        payments: 20,
        remarks: null,
        created_at: '2021-12-26 18:51:25',
        updated_at: '2021-12-26 18:51:25'
      },
      {
        id: 912,
        user_id: 1,
        date: '2021-04-13',
        customer: 'mix',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2021-12-26 18:51:54',
        updated_at: '2021-12-26 18:51:54'
      },
      {
        id: 913,
        user_id: 1,
        date: '2021-04-16',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2021-12-26 18:52:22',
        updated_at: '2021-12-26 18:52:22'
      },
      {
        id: 914,
        user_id: 1,
        date: '2021-04-17',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2021-12-26 18:52:37',
        updated_at: '2021-12-26 18:52:37'
      },
      {
        id: 915,
        user_id: 1,
        date: '2021-04-18',
        customer: 'mix',
        seller: 'station',
        item: 6,
        payments: 6,
        remarks: null,
        created_at: '2021-12-26 18:52:54',
        updated_at: '2021-12-26 18:52:54'
      },
      {
        id: 916,
        user_id: 1,
        date: '2021-04-20',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2021-12-26 18:53:14',
        updated_at: '2021-12-26 18:53:14'
      },
      {
        id: 918,
        user_id: 1,
        date: '2021-04-25',
        customer: 'Bro. Gerry',
        seller: 'station',
        item: 15,
        payments: 15,
        remarks: null,
        created_at: '2021-12-26 19:05:31',
        updated_at: '2021-12-26 19:05:31'
      },
      {
        id: 919,
        user_id: 1,
        date: '2021-04-25',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2021-12-26 19:06:02',
        updated_at: '2021-12-26 19:06:02'
      },
      {
        id: 920,
        user_id: 1,
        date: '2021-04-26',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2021-12-26 19:06:19',
        updated_at: '2021-12-26 19:06:19'
      },
      {
        id: 921,
        user_id: 1,
        date: '2021-04-27',
        customer: 'mix',
        seller: 'station',
        item: 3,
        payments: 3,
        remarks: null,
        created_at: '2021-12-26 19:06:48',
        updated_at: '2021-12-26 19:06:48'
      },
      {
        id: 923,
        user_id: 1,
        date: '2021-04-29',
        customer: 'mix',
        seller: 'station',
        item: 3,
        payments: 3,
        remarks: null,
        created_at: '2021-12-26 19:07:19',
        updated_at: '2021-12-26 19:08:10'
      },
      {
        id: 924,
        user_id: 1,
        date: '2021-04-30',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2021-12-26 19:07:35',
        updated_at: '2021-12-26 19:07:35'
      },
      {
        id: 925,
        user_id: 1,
        date: '2021-01-12',
        customer: 'Lucban',
        seller: 'station',
        item: 14,
        payments: 0,
        remarks: null,
        created_at: '2021-12-26 19:56:52',
        updated_at: '2021-12-26 19:58:20'
      },
      {
        id: 926,
        user_id: 1,
        date: '2021-04-23',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2021-12-26 20:25:03',
        updated_at: '2021-12-26 20:25:03'
      },
      {
        id: 927,
        user_id: 1,
        date: '2021-05-09',
        customer: 'mix',
        seller: 'station',
        item: 5,
        payments: 5,
        remarks: null,
        created_at: '2021-12-26 20:32:58',
        updated_at: '2021-12-26 20:39:53'
      },
      {
        id: 928,
        user_id: 1,
        date: '2021-05-13',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2021-12-26 20:35:47',
        updated_at: '2021-12-26 20:40:01'
      },
      {
        id: 929,
        user_id: 1,
        date: '2021-12-01',
        customer: 'mix',
        seller: 'station',
        item: 3,
        payments: 3,
        remarks: null,
        created_at: '2022-01-01 06:28:02',
        updated_at: '2022-01-01 06:28:02'
      },
      {
        id: 930,
        user_id: 1,
        date: '2021-12-01',
        customer: 'mix',
        seller: 'seller1',
        item: 25,
        payments: 0,
        remarks: null,
        created_at: '2022-01-01 06:29:45',
        updated_at: '2022-01-01 06:32:33'
      },
      {
        id: 931,
        user_id: 1,
        date: '2021-12-01',
        customer: 'mix',
        seller: 'seller2',
        item: 25,
        payments: 25,
        remarks: null,
        created_at: '2022-01-01 06:29:59',
        updated_at: '2022-04-13 11:02:31'
      },
      {
        id: 932,
        user_id: 1,
        date: '2021-12-02',
        customer: 'mix',
        seller: 'seller2',
        item: 34,
        payments: 34,
        remarks: null,
        created_at: '2022-01-01 06:31:31',
        updated_at: '2022-04-13 11:02:40'
      },
      {
        id: 933,
        user_id: 1,
        date: '2021-12-02',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2022-01-01 06:31:57',
        updated_at: '2022-01-01 06:31:57'
      },
      {
        id: 934,
        user_id: 1,
        date: '2021-12-03',
        customer: 'mix',
        seller: 'seller1',
        item: 11,
        payments: 0,
        remarks: null,
        created_at: '2022-01-01 06:33:40',
        updated_at: '2022-01-01 06:33:40'
      },
      {
        id: 935,
        user_id: 1,
        date: '2021-12-03',
        customer: 'mix',
        seller: 'seller2',
        item: 15,
        payments: 7,
        remarks: null,
        created_at: '2022-01-01 06:33:57',
        updated_at: '2022-04-13 11:02:53'
      },
      {
        id: 936,
        user_id: 1,
        date: '2021-12-05',
        customer: 'mix',
        seller: 'seller2',
        item: 20,
        payments: 11,
        remarks: null,
        created_at: '2022-01-01 06:34:44',
        updated_at: '2022-04-13 11:03:04'
      },
      {
        id: 937,
        user_id: 1,
        date: '2021-12-05',
        customer: 'mix',
        seller: 'seller1',
        item: 9,
        payments: 0,
        remarks: null,
        created_at: '2022-01-01 06:34:57',
        updated_at: '2022-01-01 06:34:57'
      },
      {
        id: 938,
        user_id: 1,
        date: '2021-12-06',
        customer: 'mix',
        seller: 'seller2',
        item: 12,
        payments: 12,
        remarks: 'standby 8',
        created_at: '2022-01-01 06:36:34',
        updated_at: '2022-04-13 11:03:25'
      },
      {
        id: 939,
        user_id: 1,
        date: '2021-12-07',
        customer: 'mix',
        seller: 'station',
        item: 6,
        payments: 6,
        remarks: null,
        created_at: '2022-01-01 06:38:40',
        updated_at: '2022-01-01 06:38:40'
      },
      {
        id: 940,
        user_id: 1,
        date: '2021-12-07',
        customer: 'mix',
        seller: 'seller1',
        item: 2,
        payments: null,
        remarks: null,
        created_at: '2022-01-01 06:39:01',
        updated_at: '2022-01-01 06:39:01'
      },
      {
        id: 941,
        user_id: 1,
        date: '2021-12-07',
        customer: 'mix',
        seller: 'seller2',
        item: 15,
        payments: 9,
        remarks: null,
        created_at: '2022-01-01 06:39:17',
        updated_at: '2022-04-13 11:03:35'
      },
      {
        id: 942,
        user_id: 1,
        date: '2021-12-08',
        customer: 'Tayabas',
        seller: 'station',
        item: 18,
        payments: 21,
        remarks: null,
        created_at: '2022-01-01 06:52:47',
        updated_at: '2022-01-01 06:52:47'
      },
      {
        id: 944,
        user_id: 1,
        date: '2021-12-08',
        customer: 'mix',
        seller: 'seller1',
        item: 15,
        payments: null,
        remarks: null,
        created_at: '2022-01-01 06:53:54',
        updated_at: '2022-01-01 06:53:54'
      },
      {
        id: 945,
        user_id: 1,
        date: '2021-12-08',
        customer: 'mix',
        seller: 'seller2',
        item: 24,
        payments: 5,
        remarks: null,
        created_at: '2022-01-01 06:54:16',
        updated_at: '2022-04-13 11:03:46'
      },
      {
        id: 946,
        user_id: 1,
        date: '2021-12-09',
        customer: 'mix',
        seller: 'seller1',
        item: 9,
        payments: null,
        remarks: null,
        created_at: '2022-01-01 06:55:14',
        updated_at: '2022-01-01 06:55:14'
      },
      {
        id: 947,
        user_id: 1,
        date: '2021-12-10',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: null,
        remarks: null,
        created_at: '2022-01-01 06:55:46',
        updated_at: '2022-01-01 06:55:46'
      },
      {
        id: 948,
        user_id: 1,
        date: '2021-12-10',
        customer: 'mix',
        seller: 'seller2',
        item: 7,
        payments: 5,
        remarks: null,
        created_at: '2022-01-01 06:55:59',
        updated_at: '2022-04-13 11:04:15'
      },
      {
        id: 949,
        user_id: 1,
        date: '2021-12-11',
        customer: 'mix',
        seller: 'seller2',
        item: 5,
        payments: 5,
        remarks: null,
        created_at: '2022-01-01 06:56:59',
        updated_at: '2022-04-13 11:06:34'
      },
      {
        id: 950,
        user_id: 1,
        date: '2021-12-11',
        customer: 'mix',
        seller: 'seller1',
        item: 3,
        payments: null,
        remarks: null,
        created_at: '2022-01-01 06:57:15',
        updated_at: '2022-01-01 06:57:15'
      },
      {
        id: 951,
        user_id: 1,
        date: '2021-12-12',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: null,
        remarks: null,
        created_at: '2022-01-01 06:57:31',
        updated_at: '2022-01-01 06:57:31'
      },
      {
        id: 952,
        user_id: 1,
        date: '2021-12-12',
        customer: 'mix',
        seller: 'seller2',
        item: 8,
        payments: 8,
        remarks: null,
        created_at: '2022-01-01 06:57:48',
        updated_at: '2022-04-13 11:06:43'
      },
      {
        id: 953,
        user_id: 1,
        date: '2021-12-13',
        customer: 'mix',
        seller: 'station',
        item: 19,
        payments: 19,
        remarks: null,
        created_at: '2022-01-01 06:58:27',
        updated_at: '2022-01-01 06:58:27'
      },
      {
        id: 954,
        user_id: 1,
        date: '2021-12-13',
        customer: 'mix',
        seller: 'seller1',
        item: 24,
        payments: null,
        remarks: null,
        created_at: '2022-01-01 06:58:53',
        updated_at: '2022-01-01 06:58:53'
      },
      {
        id: 955,
        user_id: 1,
        date: '2021-12-13',
        customer: 'mix',
        seller: 'seller2',
        item: 30,
        payments: 30,
        remarks: null,
        created_at: '2022-01-01 06:59:44',
        updated_at: '2022-04-13 11:06:59'
      },
      {
        id: 956,
        user_id: 1,
        date: '2021-12-14',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2022-01-01 07:00:08',
        updated_at: '2022-01-01 07:00:08'
      },
      {
        id: 957,
        user_id: 1,
        date: '2021-12-14',
        customer: 'mix',
        seller: 'seller1',
        item: 3,
        payments: 0,
        remarks: null,
        created_at: '2022-01-01 07:00:35',
        updated_at: '2022-01-01 07:00:35'
      },
      {
        id: 958,
        user_id: 1,
        date: '2021-12-14',
        customer: 'mix',
        seller: 'seller2',
        item: 17,
        payments: 17,
        remarks: 'standby 4',
        created_at: '2022-01-01 07:01:16',
        updated_at: '2022-04-13 11:07:07'
      },
      {
        id: 959,
        user_id: 1,
        date: '2021-12-15',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2022-01-01 07:01:51',
        updated_at: '2022-01-01 07:01:51'
      },
      {
        id: 960,
        user_id: 1,
        date: '2021-12-15',
        customer: 'mix',
        seller: 'seller1',
        item: 11,
        payments: null,
        remarks: null,
        created_at: '2022-01-01 07:02:22',
        updated_at: '2022-01-01 07:02:22'
      },
      {
        id: 961,
        user_id: 1,
        date: '2021-12-15',
        customer: 'mix',
        seller: 'seller2',
        item: 8,
        payments: 8,
        remarks: 'standby 4',
        created_at: '2022-01-01 07:02:51',
        updated_at: '2022-04-13 11:07:21'
      },
      {
        id: 962,
        user_id: 1,
        date: '2021-12-16',
        customer: 'mix',
        seller: 'seller1',
        item: 7,
        payments: null,
        remarks: null,
        created_at: '2022-01-01 07:03:32',
        updated_at: '2022-01-01 07:03:32'
      },
      {
        id: 963,
        user_id: 1,
        date: '2021-12-17',
        customer: 'mix',
        seller: 'seller2',
        item: 15,
        payments: 15,
        remarks: 'standby 3',
        created_at: '2022-01-01 07:04:17',
        updated_at: '2022-04-13 11:07:31'
      },
      {
        id: 964,
        user_id: 1,
        date: '2021-12-17',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: null,
        remarks: null,
        created_at: '2022-01-01 07:08:44',
        updated_at: '2022-01-01 07:08:44'
      },
      {
        id: 965,
        user_id: 1,
        date: '2021-12-18',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: null,
        remarks: null,
        created_at: '2022-01-01 07:09:27',
        updated_at: '2022-01-01 07:09:27'
      },
      {
        id: 966,
        user_id: 1,
        date: '2021-12-18',
        customer: 'mix',
        seller: 'seller2',
        item: 12,
        payments: 12,
        remarks: 'standby 6',
        created_at: '2022-01-01 07:10:15',
        updated_at: '2022-04-13 11:07:40'
      },
      {
        id: 967,
        user_id: 1,
        date: '2021-12-19',
        customer: 'mix',
        seller: 'seller2',
        item: 12,
        payments: 5,
        remarks: 'standby 6',
        created_at: '2022-01-01 07:10:46',
        updated_at: '2022-04-13 11:07:51'
      },
      {
        id: 968,
        user_id: 1,
        date: '2021-12-20',
        customer: 'mix',
        seller: 'seller2',
        item: 13,
        payments: 13,
        remarks: 'standby 2',
        created_at: '2022-01-01 07:11:22',
        updated_at: '2022-04-13 11:08:00'
      },
      {
        id: 969,
        user_id: 1,
        date: '2021-12-20',
        customer: 'mix',
        seller: 'seller1',
        item: 17,
        payments: null,
        remarks: null,
        created_at: '2022-01-01 07:11:45',
        updated_at: '2022-01-01 07:11:45'
      },
      {
        id: 970,
        user_id: 1,
        date: '2021-12-21',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: null,
        remarks: null,
        created_at: '2022-01-01 07:12:31',
        updated_at: '2022-01-01 07:12:31'
      },
      {
        id: 971,
        user_id: 1,
        date: '2021-12-21',
        customer: 'mix',
        seller: 'seller2',
        item: 15,
        payments: 15,
        remarks: null,
        created_at: '2022-01-01 07:14:03',
        updated_at: '2022-04-13 11:08:17'
      },
      {
        id: 972,
        user_id: 1,
        date: '2021-12-22',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2022-01-01 07:15:05',
        updated_at: '2022-01-01 07:15:05'
      },
      {
        id: 973,
        user_id: 1,
        date: '2021-12-22',
        customer: 'mix',
        seller: 'seller1',
        item: 13,
        payments: null,
        remarks: null,
        created_at: '2022-01-01 07:15:31',
        updated_at: '2022-01-01 07:15:31'
      },
      {
        id: 974,
        user_id: 1,
        date: '2021-12-22',
        customer: 'mix',
        seller: 'seller2',
        item: 9,
        payments: 9,
        remarks: null,
        created_at: '2022-01-01 07:16:28',
        updated_at: '2022-04-13 11:08:27'
      },
      {
        id: 975,
        user_id: 1,
        date: '2021-12-21',
        customer: 'B.Gerry',
        seller: 'station',
        item: 36,
        payments: 36,
        remarks: null,
        created_at: '2022-01-01 07:18:23',
        updated_at: '2022-01-01 07:18:23'
      },
      {
        id: 976,
        user_id: 1,
        date: '2021-12-23',
        customer: 'mix',
        seller: 'seller1',
        item: 14,
        payments: 0,
        remarks: null,
        created_at: '2022-01-01 07:19:19',
        updated_at: '2022-01-01 07:19:19'
      },
      {
        id: 977,
        user_id: 1,
        date: '2021-12-23',
        customer: 'mix',
        seller: 'seller2',
        item: 21,
        payments: 21,
        remarks: null,
        created_at: '2022-01-01 07:19:38',
        updated_at: '2022-04-13 11:08:36'
      },
      {
        id: 978,
        user_id: 1,
        date: '2021-12-24',
        customer: 'mix',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2022-01-01 07:20:04',
        updated_at: '2022-01-01 07:57:28'
      },
      {
        id: 979,
        user_id: 1,
        date: '2021-12-24',
        customer: 'mix',
        seller: 'seller1',
        item: 8,
        payments: null,
        remarks: null,
        created_at: '2022-01-01 07:20:36',
        updated_at: '2022-01-01 07:20:36'
      },
      {
        id: 980,
        user_id: 1,
        date: '2021-12-26',
        customer: 'mix',
        seller: 'seller2',
        item: 13,
        payments: 13,
        remarks: 'standby 6',
        created_at: '2022-01-01 07:21:30',
        updated_at: '2022-04-13 11:09:01'
      },
      {
        id: 981,
        user_id: 1,
        date: '2021-12-27',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: null,
        remarks: null,
        created_at: '2022-01-01 07:21:58',
        updated_at: '2022-01-01 07:21:58'
      },
      {
        id: 982,
        user_id: 1,
        date: '2021-12-28',
        customer: 'mix',
        seller: 'seller1',
        item: 3,
        payments: null,
        remarks: null,
        created_at: '2022-01-01 07:22:25',
        updated_at: '2022-01-01 07:22:25'
      },
      {
        id: 983,
        user_id: 1,
        date: '2021-12-28',
        customer: 'mix',
        seller: 'seller2',
        item: 7,
        payments: 7,
        remarks: 'standby 8',
        created_at: '2022-01-01 07:23:23',
        updated_at: '2022-04-13 11:09:19'
      },
      {
        id: 984,
        user_id: 1,
        date: '2021-12-29',
        customer: 'mix',
        seller: 'seller2',
        item: 15,
        payments: 15,
        remarks: null,
        created_at: '2022-01-01 07:24:16',
        updated_at: '2022-04-13 11:09:32'
      },
      {
        id: 985,
        user_id: 1,
        date: '2021-12-29',
        customer: 'mix',
        seller: 'seller1',
        item: 4,
        payments: null,
        remarks: null,
        created_at: '2022-01-01 07:24:35',
        updated_at: '2022-01-01 07:24:35'
      },
      {
        id: 986,
        user_id: 1,
        date: '2021-12-30',
        customer: 'mix',
        seller: 'station',
        item: 8,
        payments: 8,
        remarks: null,
        created_at: '2022-01-01 07:25:02',
        updated_at: '2022-01-01 07:25:02'
      },
      {
        id: 987,
        user_id: 1,
        date: '2021-12-30',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: null,
        remarks: null,
        created_at: '2022-01-01 07:25:31',
        updated_at: '2022-01-01 07:25:31'
      },
      {
        id: 988,
        user_id: 1,
        date: '2021-12-30',
        customer: 'mix',
        seller: 'seller2',
        item: 6,
        payments: 6,
        remarks: null,
        created_at: '2022-01-01 07:25:47',
        updated_at: '2022-04-13 11:09:43'
      },
      {
        id: 989,
        user_id: 1,
        date: '2021-09-03',
        customer: 'mix',
        seller: 'seller2',
        item: 14,
        payments: 14,
        remarks: null,
        created_at: '2022-01-01 08:39:14',
        updated_at: '2022-04-13 10:51:44'
      },
      {
        id: 990,
        user_id: 1,
        date: '2021-09-04',
        customer: 'mix',
        seller: 'seller2',
        item: 20,
        payments: 20,
        remarks: null,
        created_at: '2022-01-01 08:39:31',
        updated_at: '2022-04-13 10:51:54'
      },
      {
        id: 991,
        user_id: 1,
        date: '2021-09-05',
        customer: 'mix',
        seller: 'seller2',
        item: 33,
        payments: 33,
        remarks: null,
        created_at: '2022-01-01 08:39:47',
        updated_at: '2022-04-13 10:52:08'
      },
      {
        id: 992,
        user_id: 1,
        date: '2021-09-06',
        customer: 'mix',
        seller: 'seller2',
        item: 18,
        payments: 18,
        remarks: null,
        created_at: '2022-01-01 08:40:39',
        updated_at: '2022-04-13 10:52:17'
      },
      {
        id: 993,
        user_id: 1,
        date: '2021-09-07',
        customer: 'mix',
        seller: 'seller2',
        item: 13,
        payments: 13,
        remarks: 'standby 4',
        created_at: '2022-01-01 08:41:06',
        updated_at: '2022-04-13 10:52:28'
      },
      {
        id: 994,
        user_id: 1,
        date: '2021-09-09',
        customer: 'mix',
        seller: 'seller2',
        item: 26,
        payments: 26,
        remarks: null,
        created_at: '2022-01-01 08:41:34',
        updated_at: '2022-04-13 10:52:44'
      },
      {
        id: 995,
        user_id: 1,
        date: '2021-09-10',
        customer: 'mix',
        seller: 'seller2',
        item: 10,
        payments: 10,
        remarks: 'standby 3',
        created_at: '2022-01-01 08:41:58',
        updated_at: '2022-04-13 10:55:47'
      },
      {
        id: 996,
        user_id: 1,
        date: '2021-09-11',
        customer: 'mix',
        seller: 'seller2',
        item: 15,
        payments: 15,
        remarks: null,
        created_at: '2022-01-01 08:43:44',
        updated_at: '2022-04-13 10:56:01'
      },
      {
        id: 997,
        user_id: 1,
        date: '2021-09-12',
        customer: 'mix',
        seller: 'seller2',
        item: 7,
        payments: 0,
        remarks: null,
        created_at: '2022-01-01 08:44:05',
        updated_at: '2022-05-18 21:26:24'
      },
      {
        id: 998,
        user_id: 1,
        date: '2021-09-19',
        customer: 'mix',
        seller: 'seller2',
        item: 30,
        payments: 30,
        remarks: null,
        created_at: '2022-01-01 08:44:51',
        updated_at: '2022-04-13 10:57:00'
      },
      {
        id: 999,
        user_id: 1,
        date: '2021-09-20',
        customer: 'mix',
        seller: 'seller2',
        item: 16,
        payments: 16,
        remarks: null,
        created_at: '2022-01-01 08:45:19',
        updated_at: '2022-04-13 10:57:12'
      },
      {
        id: 1000,
        user_id: 1,
        date: '2021-09-21',
        customer: 'mix',
        seller: 'seller2',
        item: 39,
        payments: 39,
        remarks: null,
        created_at: '2022-01-01 08:45:37',
        updated_at: '2022-04-13 10:57:23'
      },
      {
        id: 1001,
        user_id: 1,
        date: '2021-09-22',
        customer: 'mix',
        seller: 'seller2',
        item: 5,
        payments: 5,
        remarks: null,
        created_at: '2022-01-01 08:45:54',
        updated_at: '2022-04-13 10:57:34'
      },
      {
        id: 1002,
        user_id: 1,
        date: '2021-09-23',
        customer: 'mix',
        seller: 'seller2',
        item: 27,
        payments: 27,
        remarks: null,
        created_at: '2022-01-01 08:46:09',
        updated_at: '2022-04-13 10:57:45'
      },
      {
        id: 1003,
        user_id: 1,
        date: '2021-09-25',
        customer: 'mix',
        seller: 'seller2',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2022-01-01 08:46:37',
        updated_at: '2022-04-13 10:59:22'
      },
      {
        id: 1004,
        user_id: 1,
        date: '2021-09-26',
        customer: 'mix',
        seller: 'seller2',
        item: 20,
        payments: 0,
        remarks: null,
        created_at: '2022-01-01 08:46:54',
        updated_at: '2022-05-18 21:25:37'
      },
      {
        id: 1005,
        user_id: 1,
        date: '2021-09-01',
        customer: 'mix',
        seller: 'seller1',
        item: 8,
        payments: 0,
        remarks: null,
        created_at: '2022-01-01 08:48:02',
        updated_at: '2022-01-01 08:48:02'
      },
      {
        id: 1006,
        user_id: 1,
        date: '2021-09-02',
        customer: 'mix',
        seller: 'seller1',
        item: 9,
        payments: 0,
        remarks: null,
        created_at: '2022-01-01 08:48:24',
        updated_at: '2022-01-01 08:48:24'
      },
      {
        id: 1007,
        user_id: 1,
        date: '2021-09-03',
        customer: 'mix',
        seller: 'seller1',
        item: 12,
        payments: 0,
        remarks: null,
        created_at: '2022-01-01 08:48:40',
        updated_at: '2022-01-01 08:48:40'
      },
      {
        id: 1008,
        user_id: 1,
        date: '2021-09-04',
        customer: 'mix',
        seller: 'seller1',
        item: 12,
        payments: 0,
        remarks: null,
        created_at: '2022-01-01 08:48:55',
        updated_at: '2022-01-01 08:48:55'
      },
      {
        id: 1009,
        user_id: 1,
        date: '2021-09-05',
        customer: 'mix',
        seller: 'seller1',
        item: 3,
        payments: 0,
        remarks: null,
        created_at: '2022-01-01 08:49:14',
        updated_at: '2022-01-01 08:49:14'
      },
      {
        id: 1010,
        user_id: 1,
        date: '2021-09-06',
        customer: 'mix',
        seller: 'seller1',
        item: 13,
        payments: 0,
        remarks: null,
        created_at: '2022-01-01 08:49:44',
        updated_at: '2022-01-01 08:49:44'
      },
      {
        id: 1011,
        user_id: 1,
        date: '2021-09-07',
        customer: 'mix',
        seller: 'seller1',
        item: 7,
        payments: 0,
        remarks: null,
        created_at: '2022-01-01 08:50:00',
        updated_at: '2022-01-01 08:50:00'
      },
      {
        id: 1014,
        user_id: 1,
        date: '2021-09-10',
        customer: 'mix',
        seller: 'seller1',
        item: 36,
        payments: 0,
        remarks: null,
        created_at: '2022-01-01 08:52:07',
        updated_at: '2022-01-01 08:52:07'
      },
      {
        id: 1015,
        user_id: 1,
        date: '2021-09-12',
        customer: 'mix',
        seller: 'seller1',
        item: 13,
        payments: 0,
        remarks: null,
        created_at: '2022-01-01 08:54:05',
        updated_at: '2022-01-01 08:54:39'
      },
      {
        id: 1016,
        user_id: 1,
        date: '2021-09-13',
        customer: 'mix',
        seller: 'seller1',
        item: 15,
        payments: 0,
        remarks: null,
        created_at: '2022-01-01 08:55:05',
        updated_at: '2022-01-01 08:55:05'
      },
      {
        id: 1017,
        user_id: 1,
        date: '2021-09-14',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2022-01-01 08:55:42',
        updated_at: '2022-01-01 08:55:42'
      },
      {
        id: 1018,
        user_id: 1,
        date: '2021-09-15',
        customer: 'mix',
        seller: 'seller1',
        item: 27,
        payments: 0,
        remarks: null,
        created_at: '2022-01-01 08:56:09',
        updated_at: '2022-01-01 08:56:09'
      },
      {
        id: 1019,
        user_id: 1,
        date: '2021-09-17',
        customer: 'mix',
        seller: 'seller1',
        item: 20,
        payments: 0,
        remarks: null,
        created_at: '2022-01-01 08:57:00',
        updated_at: '2022-01-01 08:57:00'
      },
      {
        id: 1020,
        user_id: 1,
        date: '2021-09-19',
        customer: 'mix',
        seller: 'seller1',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2022-01-01 08:57:26',
        updated_at: '2022-01-01 08:57:26'
      },
      {
        id: 1021,
        user_id: 1,
        date: '2021-09-20',
        customer: 'mix',
        seller: 'seller1',
        item: 7,
        payments: 0,
        remarks: null,
        created_at: '2022-01-01 08:57:55',
        updated_at: '2022-01-01 08:57:55'
      },
      {
        id: 1022,
        user_id: 1,
        date: '2021-09-21',
        customer: 'mix',
        seller: 'seller1',
        item: 11,
        payments: 0,
        remarks: null,
        created_at: '2022-01-01 08:58:29',
        updated_at: '2022-01-01 08:58:29'
      },
      {
        id: 1023,
        user_id: 1,
        date: '2021-09-24',
        customer: 'mix',
        seller: 'seller1',
        item: 35,
        payments: 0,
        remarks: null,
        created_at: '2022-01-01 08:58:52',
        updated_at: '2022-01-01 08:59:33'
      },
      {
        id: 1024,
        user_id: 1,
        date: '2021-09-25',
        customer: 'mix',
        seller: 'seller1',
        item: 8,
        payments: 0,
        remarks: null,
        created_at: '2022-01-01 09:00:22',
        updated_at: '2022-01-01 09:00:58'
      },
      {
        id: 1025,
        user_id: 1,
        date: '2021-09-26',
        customer: 'mix',
        seller: 'seller1',
        item: 22,
        payments: 0,
        remarks: null,
        created_at: '2022-01-01 09:01:39',
        updated_at: '2022-01-01 09:01:39'
      },
      {
        id: 1026,
        user_id: 1,
        date: '2022-01-02',
        customer: 'mix',
        seller: 'seller2',
        item: 20,
        payments: 0,
        remarks: '6 standby',
        created_at: '2022-01-31 19:24:51',
        updated_at: '2022-05-18 21:16:38'
      },
      {
        id: 1027,
        user_id: 1,
        date: '2022-01-03',
        customer: 'mix',
        seller: 'seller2',
        item: 45,
        payments: 0,
        remarks: '5 standby',
        created_at: '2022-01-31 19:26:09',
        updated_at: '2022-05-18 21:16:49'
      },
      {
        id: 1028,
        user_id: 1,
        date: '2022-01-04',
        customer: 'mix',
        seller: 'seller2',
        item: 15,
        payments: 0,
        remarks: null,
        created_at: '2022-01-31 19:27:00',
        updated_at: '2022-05-18 21:17:05'
      },
      {
        id: 1029,
        user_id: 1,
        date: '2022-01-05',
        customer: 'mix',
        seller: 'seller2',
        item: 15,
        payments: 0,
        remarks: null,
        created_at: '2022-01-31 19:27:16',
        updated_at: '2022-05-18 21:17:20'
      },
      {
        id: 1030,
        user_id: 1,
        date: '2022-01-07',
        customer: 'mix',
        seller: 'seller2',
        item: 18,
        payments: 0,
        remarks: null,
        created_at: '2022-01-31 19:27:35',
        updated_at: '2022-05-18 21:17:32'
      },
      {
        id: 1031,
        user_id: 1,
        date: '2022-01-08',
        customer: 'mix',
        seller: 'seller2',
        item: 5,
        payments: 0,
        remarks: '7 standby',
        created_at: '2022-01-31 19:30:35',
        updated_at: '2022-05-18 21:17:46'
      },
      {
        id: 1032,
        user_id: 1,
        date: '2022-01-09',
        customer: 'mix',
        seller: 'seller2',
        item: 24,
        payments: 0,
        remarks: null,
        created_at: '2022-01-31 19:33:08',
        updated_at: '2022-05-18 21:17:59'
      },
      {
        id: 1033,
        user_id: 1,
        date: '2022-01-10',
        customer: 'mix',
        seller: 'seller2',
        item: 12,
        payments: 0,
        remarks: null,
        created_at: '2022-01-31 19:36:13',
        updated_at: '2022-05-18 21:18:19'
      },
      {
        id: 1034,
        user_id: 1,
        date: '2022-01-11',
        customer: 'mix',
        seller: 'seller2',
        item: 12,
        payments: 0,
        remarks: '6 standby',
        created_at: '2022-01-31 19:41:12',
        updated_at: '2022-05-18 21:18:29'
      },
      {
        id: 1035,
        user_id: 1,
        date: '2022-01-12',
        customer: 'mix',
        seller: 'seller2',
        item: 17,
        payments: 0,
        remarks: null,
        created_at: '2022-01-31 19:42:25',
        updated_at: '2022-05-18 21:18:40'
      },
      {
        id: 1036,
        user_id: 1,
        date: '2022-01-13',
        customer: 'mix',
        seller: 'seller2',
        item: 16,
        payments: 0,
        remarks: null,
        created_at: '2022-01-31 19:44:23',
        updated_at: '2022-05-18 21:18:53'
      },
      {
        id: 1037,
        user_id: 1,
        date: '2022-01-14',
        customer: 'mix',
        seller: 'seller2',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2022-01-31 19:50:06',
        updated_at: '2022-05-18 21:19:01'
      },
      {
        id: 1038,
        user_id: 1,
        date: '2022-01-15',
        customer: 'mix',
        seller: 'seller2',
        item: 24,
        payments: 0,
        remarks: '3 standby',
        created_at: '2022-01-31 19:50:51',
        updated_at: '2022-05-18 21:19:14'
      },
      {
        id: 1039,
        user_id: 1,
        date: '2022-01-16',
        customer: 'mix',
        seller: 'seller2',
        item: 15,
        payments: 0,
        remarks: '2 standby',
        created_at: '2022-01-31 19:51:21',
        updated_at: '2022-05-18 21:19:23'
      },
      {
        id: 1040,
        user_id: 1,
        date: '2022-01-17',
        customer: 'mix',
        seller: 'seller2',
        item: 16,
        payments: 0,
        remarks: null,
        created_at: '2022-01-31 19:51:54',
        updated_at: '2022-05-18 21:19:32'
      },
      {
        id: 1041,
        user_id: 1,
        date: '2022-01-18',
        customer: 'mix',
        seller: 'seller2',
        item: 15,
        payments: 0,
        remarks: '3 standby',
        created_at: '2022-01-31 19:52:31',
        updated_at: '2022-05-18 21:19:42'
      },
      {
        id: 1042,
        user_id: 1,
        date: '2022-01-19',
        customer: 'mix',
        seller: 'seller2',
        item: 8,
        payments: 0,
        remarks: null,
        created_at: '2022-01-31 19:58:35',
        updated_at: '2022-05-18 21:19:58'
      },
      {
        id: 1043,
        user_id: 1,
        date: '2022-01-22',
        customer: 'mix',
        seller: 'seller2',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2022-01-31 20:09:01',
        updated_at: '2022-05-18 21:20:21'
      },
      {
        id: 1044,
        user_id: 1,
        date: '2022-01-23',
        customer: 'mix',
        seller: 'seller2',
        item: 24,
        payments: 0,
        remarks: '2 standby',
        created_at: '2022-01-31 20:10:26',
        updated_at: '2022-05-18 21:20:36'
      },
      {
        id: 1045,
        user_id: 1,
        date: '2022-01-24',
        customer: 'mix',
        seller: 'seller2',
        item: 4,
        payments: 0,
        remarks: '2 standby',
        created_at: '2022-01-31 20:12:37',
        updated_at: '2022-05-18 21:20:54'
      },
      {
        id: 1046,
        user_id: 1,
        date: '2022-01-25',
        customer: 'mix',
        seller: 'seller2',
        item: 39,
        payments: 0,
        remarks: null,
        created_at: '2022-01-31 20:13:50',
        updated_at: '2022-05-18 21:21:14'
      },
      {
        id: 1047,
        user_id: 1,
        date: '2022-01-26',
        customer: 'mix',
        seller: 'seller2',
        item: 16,
        payments: 0,
        remarks: null,
        created_at: '2022-01-31 20:17:48',
        updated_at: '2022-05-18 21:21:39'
      },
      {
        id: 1048,
        user_id: 1,
        date: '2022-01-28',
        customer: 'mix',
        seller: 'seller2',
        item: 28,
        payments: 0,
        remarks: '4 standby',
        created_at: '2022-01-31 20:18:37',
        updated_at: '2022-05-18 21:21:54'
      },
      {
        id: 1049,
        user_id: 1,
        date: '2022-01-29',
        customer: 'mix',
        seller: 'seller2',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2022-01-31 20:19:06',
        updated_at: '2022-05-18 21:22:05'
      },
      {
        id: 1050,
        user_id: 1,
        date: '2022-01-30',
        customer: 'mix',
        seller: 'seller2',
        item: 22,
        payments: 0,
        remarks: '4 standby',
        created_at: '2022-01-31 20:19:41',
        updated_at: '2022-05-18 21:22:14'
      },
      {
        id: 1051,
        user_id: 1,
        date: '2022-01-31',
        customer: 'mix',
        seller: 'seller2',
        item: 8,
        payments: 0,
        remarks: null,
        created_at: '2022-01-31 20:20:45',
        updated_at: '2022-05-18 21:22:34'
      },
      {
        id: 1052,
        user_id: 1,
        date: '2022-01-01',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2022-02-02 19:24:54',
        updated_at: '2022-02-02 19:35:41'
      },
      {
        id: 1053,
        user_id: 1,
        date: '2022-01-02',
        customer: 'mix',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2022-02-02 19:25:09',
        updated_at: '2022-02-02 19:35:51'
      },
      {
        id: 1054,
        user_id: 1,
        date: '2022-01-03',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2022-02-02 19:25:23',
        updated_at: '2022-02-02 19:35:59'
      },
      {
        id: 1055,
        user_id: 1,
        date: '2022-01-04',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2022-02-02 19:25:33',
        updated_at: '2022-02-02 19:36:07'
      },
      {
        id: 1056,
        user_id: 1,
        date: '2022-01-05',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2022-02-02 19:25:42',
        updated_at: '2022-02-02 19:36:14'
      },
      {
        id: 1057,
        user_id: 1,
        date: '2022-01-06',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2022-02-02 19:25:52',
        updated_at: '2022-02-02 19:36:22'
      },
      {
        id: 1058,
        user_id: 1,
        date: '2022-01-07',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2022-02-02 19:26:03',
        updated_at: '2022-02-02 19:36:30'
      },
      {
        id: 1059,
        user_id: 1,
        date: '2022-01-16',
        customer: 'mix',
        seller: 'station',
        item: 3,
        payments: 3,
        remarks: null,
        created_at: '2022-02-02 19:27:34',
        updated_at: '2022-02-02 19:36:46'
      },
      {
        id: 1060,
        user_id: 1,
        date: '2022-01-18',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2022-02-02 19:27:47',
        updated_at: '2022-02-02 19:40:54'
      },
      {
        id: 1061,
        user_id: 1,
        date: '2022-01-20',
        customer: 'mix',
        seller: 'station',
        item: 9,
        payments: 9,
        remarks: null,
        created_at: '2022-02-02 19:28:17',
        updated_at: '2022-02-02 19:40:44'
      },
      {
        id: 1062,
        user_id: 1,
        date: '2022-01-23',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2022-02-02 19:28:35',
        updated_at: '2022-02-02 19:37:07'
      },
      {
        id: 1063,
        user_id: 1,
        date: '2022-01-24',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2022-02-02 19:28:48',
        updated_at: '2022-02-02 19:37:17'
      },
      {
        id: 1065,
        user_id: 1,
        date: '2022-01-24',
        customer: 'B.Gerry',
        seller: 'station',
        item: 23,
        payments: 23,
        remarks: null,
        created_at: '2022-02-02 19:29:44',
        updated_at: '2022-02-02 19:29:44'
      },
      {
        id: 1066,
        user_id: 1,
        date: '2022-01-28',
        customer: 'mix',
        seller: 'station',
        item: 3,
        payments: 3,
        remarks: null,
        created_at: '2022-02-02 19:30:35',
        updated_at: '2022-02-02 19:39:30'
      },
      {
        id: 1068,
        user_id: 1,
        date: '2022-01-30',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2022-02-02 19:31:04',
        updated_at: '2022-02-02 19:39:53'
      },
      {
        id: 1069,
        user_id: 1,
        date: '2022-01-31',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2022-02-02 19:31:15',
        updated_at: '2022-02-02 19:40:16'
      },
      {
        id: 1070,
        user_id: 1,
        date: '2022-01-10',
        customer: 'B.Gerry',
        seller: 'station',
        item: 31,
        payments: 31,
        remarks: null,
        created_at: '2022-02-02 19:32:18',
        updated_at: '2022-02-02 19:32:18'
      },
      {
        id: 1071,
        user_id: 1,
        date: '2022-01-10',
        customer: 'Lucban',
        seller: 'station',
        item: 51,
        payments: 51,
        remarks: null,
        created_at: '2022-02-02 19:32:54',
        updated_at: '2022-02-02 19:32:54'
      },
      {
        id: 1072,
        user_id: 1,
        date: '2022-01-10',
        customer: 'Tayabas',
        seller: 'station',
        item: 18,
        payments: 18,
        remarks: null,
        created_at: '2022-02-02 19:33:20',
        updated_at: '2022-02-02 19:33:20'
      },
      {
        id: 1073,
        user_id: 1,
        date: '2022-01-13',
        customer: 'B.Edil',
        seller: 'station',
        item: 20,
        payments: 20,
        remarks: null,
        created_at: '2022-02-02 19:34:11',
        updated_at: '2022-07-14 17:02:55'
      },
      {
        id: 1074,
        user_id: 1,
        date: '2022-01-01',
        customer: 'mix',
        seller: 'seller1',
        item: 18,
        payments: 0,
        remarks: null,
        created_at: '2022-02-02 19:45:47',
        updated_at: '2022-02-02 19:45:47'
      },
      {
        id: 1075,
        user_id: 1,
        date: '2022-01-02',
        customer: 'mix',
        seller: 'seller1',
        item: 14,
        payments: 0,
        remarks: null,
        created_at: '2022-02-02 19:46:08',
        updated_at: '2022-02-02 19:46:08'
      },
      {
        id: 1076,
        user_id: 1,
        date: '2022-01-03',
        customer: 'mix',
        seller: 'seller1',
        item: 20,
        payments: 0,
        remarks: null,
        created_at: '2022-02-02 19:46:35',
        updated_at: '2022-02-02 19:46:35'
      },
      {
        id: 1077,
        user_id: 1,
        date: '2022-01-05',
        customer: 'mix',
        seller: 'seller1',
        item: 17,
        payments: 0,
        remarks: null,
        created_at: '2022-02-02 19:47:02',
        updated_at: '2022-02-02 19:47:02'
      },
      {
        id: 1078,
        user_id: 1,
        date: '2022-01-08',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2022-02-02 19:47:51',
        updated_at: '2022-02-02 19:47:51'
      },
      {
        id: 1079,
        user_id: 1,
        date: '2022-01-09',
        customer: 'mix',
        seller: 'seller1',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2022-02-02 19:48:09',
        updated_at: '2022-02-02 19:48:09'
      },
      {
        id: 1080,
        user_id: 1,
        date: '2022-01-06',
        customer: 'mix',
        seller: 'seller1',
        item: 15,
        payments: 0,
        remarks: '150 pcs . bottled 330ml',
        created_at: '2022-02-02 19:49:23',
        updated_at: '2022-02-02 19:49:23'
      },
      {
        id: 1081,
        user_id: 1,
        date: '2022-01-07',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2022-02-02 19:49:49',
        updated_at: '2022-02-02 19:49:49'
      },
      {
        id: 1082,
        user_id: 1,
        date: '2022-01-10',
        customer: 'mix',
        seller: 'seller1',
        item: 11,
        payments: 0,
        remarks: null,
        created_at: '2022-02-02 19:50:13',
        updated_at: '2022-02-02 19:50:13'
      },
      {
        id: 1083,
        user_id: 1,
        date: '2022-01-12',
        customer: 'mix',
        seller: 'seller1',
        item: 21,
        payments: 0,
        remarks: null,
        created_at: '2022-02-02 19:50:45',
        updated_at: '2022-02-02 19:50:45'
      },
      {
        id: 1084,
        user_id: 1,
        date: '2022-01-13',
        customer: 'mix',
        seller: 'seller1',
        item: 11,
        payments: 0,
        remarks: null,
        created_at: '2022-02-02 19:51:10',
        updated_at: '2022-02-02 19:51:10'
      },
      {
        id: 1085,
        user_id: 1,
        date: '2022-01-15',
        customer: 'mix',
        seller: 'seller1',
        item: 8,
        payments: 0,
        remarks: null,
        created_at: '2022-02-02 19:51:40',
        updated_at: '2022-02-02 19:51:40'
      },
      {
        id: 1086,
        user_id: 1,
        date: '2022-01-16',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2022-02-02 19:51:56',
        updated_at: '2022-02-02 19:51:56'
      },
      {
        id: 1087,
        user_id: 1,
        date: '2022-01-17',
        customer: 'mix',
        seller: 'seller1',
        item: 17,
        payments: 0,
        remarks: null,
        created_at: '2022-02-02 19:52:13',
        updated_at: '2022-02-02 19:52:13'
      },
      {
        id: 1088,
        user_id: 1,
        date: '2022-01-19',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2022-02-02 19:52:34',
        updated_at: '2022-02-02 19:52:34'
      },
      {
        id: 1089,
        user_id: 1,
        date: '2022-01-20',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2022-02-02 19:52:50',
        updated_at: '2022-02-02 19:52:50'
      },
      {
        id: 1090,
        user_id: 1,
        date: '2022-01-22',
        customer: 'mix',
        seller: 'seller1',
        item: 23,
        payments: 0,
        remarks: null,
        created_at: '2022-02-02 19:54:22',
        updated_at: '2022-11-04 22:58:00'
      },
      {
        id: 1091,
        user_id: 1,
        date: '2022-01-23',
        customer: 'mix',
        seller: 'seller1',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2022-02-02 19:55:27',
        updated_at: '2022-02-02 19:55:27'
      },
      {
        id: 1092,
        user_id: 1,
        date: '2022-01-24',
        customer: 'mix',
        seller: 'seller1',
        item: 14,
        payments: 0,
        remarks: '1 free sis.leonora',
        created_at: '2022-02-02 19:56:12',
        updated_at: '2022-02-02 19:56:12'
      },
      {
        id: 1093,
        user_id: 1,
        date: '2022-01-25',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: '1 ds',
        created_at: '2022-02-02 19:57:14',
        updated_at: '2022-02-02 19:57:14'
      },
      {
        id: 1094,
        user_id: 1,
        date: '2022-01-26',
        customer: 'mix',
        seller: 'seller1',
        item: 11,
        payments: 0,
        remarks: '200pcs. bottled 330ml',
        created_at: '2022-02-02 19:59:31',
        updated_at: '2022-02-02 19:59:31'
      },
      {
        id: 1095,
        user_id: 1,
        date: '2022-01-27',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2022-02-02 20:00:06',
        updated_at: '2022-02-02 20:00:06'
      },
      {
        id: 1096,
        user_id: 1,
        date: '2022-01-28',
        customer: 'mix',
        seller: 'seller1',
        item: 13,
        payments: 0,
        remarks: null,
        created_at: '2022-02-02 20:03:29',
        updated_at: '2022-02-02 20:03:29'
      },
      {
        id: 1097,
        user_id: 1,
        date: '2022-01-28',
        customer: 'mix',
        seller: 'seller1',
        item: 19,
        payments: 0,
        remarks: '1 free baptism',
        created_at: '2022-02-02 20:04:13',
        updated_at: '2022-02-02 20:04:13'
      },
      {
        id: 1098,
        user_id: 1,
        date: '2022-01-29',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2022-02-02 20:04:50',
        updated_at: '2022-02-02 20:04:50'
      },
      {
        id: 1099,
        user_id: 1,
        date: '2022-01-30',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2022-02-02 20:05:08',
        updated_at: '2022-02-02 20:05:08'
      },
      {
        id: 1100,
        user_id: 1,
        date: '2022-01-31',
        customer: 'mix',
        seller: 'seller1',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2022-02-02 20:05:18',
        updated_at: '2022-02-02 20:05:18'
      },
      {
        id: 1101,
        user_id: 1,
        date: '2022-02-01',
        customer: 'mix',
        seller: 'station',
        item: 3,
        payments: 3,
        remarks: null,
        created_at: '2022-03-14 17:37:08',
        updated_at: '2022-03-14 17:37:08'
      },
      {
        id: 1102,
        user_id: 1,
        date: '2022-02-02',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2022-03-14 17:39:07',
        updated_at: '2022-03-14 17:39:07'
      },
      {
        id: 1103,
        user_id: 1,
        date: '2022-02-04',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2022-03-14 17:39:16',
        updated_at: '2022-03-14 17:39:16'
      },
      {
        id: 1104,
        user_id: 1,
        date: '2022-02-05',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2022-03-14 17:39:30',
        updated_at: '2022-03-14 17:39:30'
      },
      {
        id: 1105,
        user_id: 1,
        date: '2022-02-06',
        customer: 'Tayabas',
        seller: 'station',
        item: 15,
        payments: 15,
        remarks: null,
        created_at: '2022-03-14 17:40:48',
        updated_at: '2022-03-14 17:43:37'
      },
      {
        id: 1106,
        user_id: 1,
        date: '2022-02-07',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2022-03-14 17:41:14',
        updated_at: '2022-03-14 17:41:14'
      },
      {
        id: 1107,
        user_id: 1,
        date: '2022-02-08',
        customer: 'mix',
        seller: 'station',
        item: 3,
        payments: 3,
        remarks: null,
        created_at: '2022-03-14 17:41:29',
        updated_at: '2022-03-14 17:41:29'
      },
      {
        id: 1108,
        user_id: 1,
        date: '2022-02-09',
        customer: 'Lucban',
        seller: 'station',
        item: 36,
        payments: 36,
        remarks: null,
        created_at: '2022-03-14 17:42:15',
        updated_at: '2022-03-14 17:42:15'
      },
      {
        id: 1109,
        user_id: 1,
        date: '2022-02-06',
        customer: 'B.Gerry',
        seller: 'station',
        item: 26,
        payments: 26,
        remarks: null,
        created_at: '2022-03-14 17:44:26',
        updated_at: '2022-03-14 17:44:26'
      },
      {
        id: 1110,
        user_id: 1,
        date: '2022-02-11',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2022-03-14 17:45:21',
        updated_at: '2022-03-14 17:45:21'
      },
      {
        id: 1111,
        user_id: 1,
        date: '2022-02-12',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2022-03-14 17:45:43',
        updated_at: '2022-03-14 17:45:43'
      },
      {
        id: 1112,
        user_id: 1,
        date: '2022-02-14',
        customer: 'B.Gerry',
        seller: 'station',
        item: 22,
        payments: 22,
        remarks: null,
        created_at: '2022-03-14 17:46:21',
        updated_at: '2022-03-14 17:46:21'
      },
      {
        id: 1113,
        user_id: 1,
        date: '2022-02-16',
        customer: 'B.Gerry',
        seller: 'station',
        item: 25,
        payments: 25,
        remarks: null,
        created_at: '2022-03-14 17:46:40',
        updated_at: '2022-03-14 17:46:40'
      },
      {
        id: 1114,
        user_id: 1,
        date: '2022-02-17',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2022-03-14 17:47:10',
        updated_at: '2022-03-14 17:47:10'
      },
      {
        id: 1115,
        user_id: 1,
        date: '2022-02-18',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2022-03-14 17:47:28',
        updated_at: '2022-03-14 17:47:28'
      },
      {
        id: 1116,
        user_id: 1,
        date: '2022-02-20',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2022-03-14 17:47:47',
        updated_at: '2022-03-14 17:47:47'
      },
      {
        id: 1117,
        user_id: 1,
        date: '2022-02-22',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2022-03-14 17:47:58',
        updated_at: '2022-03-14 17:47:58'
      },
      {
        id: 1118,
        user_id: 1,
        date: '2022-02-23',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2022-03-14 17:48:16',
        updated_at: '2022-03-14 17:48:16'
      },
      {
        id: 1119,
        user_id: 1,
        date: '2022-02-23',
        customer: 'B.Gerry',
        seller: 'station',
        item: 31,
        payments: 31,
        remarks: null,
        created_at: '2022-03-14 17:48:47',
        updated_at: '2022-03-14 17:48:47'
      },
      {
        id: 1120,
        user_id: 1,
        date: '2022-02-26',
        customer: 'Lucban',
        seller: 'station',
        item: 14,
        payments: 14,
        remarks: null,
        created_at: '2022-03-14 17:49:55',
        updated_at: '2022-03-14 17:49:55'
      },
      {
        id: 1121,
        user_id: 1,
        date: '2022-02-28',
        customer: 'mix',
        seller: 'station',
        item: 3,
        payments: 3,
        remarks: null,
        created_at: '2022-03-14 17:50:19',
        updated_at: '2022-03-14 17:50:19'
      },
      {
        id: 1122,
        user_id: 1,
        date: '2022-02-01',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2022-03-14 19:04:16',
        updated_at: '2022-03-14 19:04:16'
      },
      {
        id: 1123,
        user_id: 1,
        date: '2022-02-02',
        customer: 'mix',
        seller: 'seller1',
        item: 2,
        payments: 0,
        remarks: null,
        created_at: '2022-03-14 19:04:30',
        updated_at: '2022-03-14 19:04:30'
      },
      {
        id: 1124,
        user_id: 1,
        date: '2022-02-03',
        customer: 'mix',
        seller: 'seller1',
        item: 7,
        payments: 0,
        remarks: '220 bottles\n1 free B.july\n1 free barracks',
        created_at: '2022-03-14 19:06:08',
        updated_at: '2022-03-14 19:06:08'
      },
      {
        id: 1125,
        user_id: 1,
        date: '2022-02-04',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: 0,
        remarks: '75 bottles mauban',
        created_at: '2022-03-14 19:07:12',
        updated_at: '2022-03-14 19:07:12'
      },
      {
        id: 1126,
        user_id: 1,
        date: '2022-02-05',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2022-03-14 19:07:39',
        updated_at: '2022-03-14 19:07:39'
      },
      {
        id: 1127,
        user_id: 1,
        date: '2022-02-06',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2022-03-14 19:08:08',
        updated_at: '2022-03-14 19:08:08'
      },
      {
        id: 1128,
        user_id: 1,
        date: '2022-02-07',
        customer: 'mix',
        seller: 'seller1',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2022-03-14 19:08:22',
        updated_at: '2022-03-14 19:08:22'
      },
      {
        id: 1129,
        user_id: 1,
        date: '2022-02-08',
        customer: 'mix',
        seller: 'seller1',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2022-03-14 19:08:31',
        updated_at: '2022-03-14 19:08:31'
      },
      {
        id: 1130,
        user_id: 1,
        date: '2022-02-09',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2022-03-14 19:08:45',
        updated_at: '2022-03-14 19:08:45'
      },
      {
        id: 1131,
        user_id: 1,
        date: '2022-02-10',
        customer: 'mix',
        seller: 'seller1',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2022-03-14 19:09:20',
        updated_at: '2022-03-14 19:10:16'
      },
      {
        id: 1132,
        user_id: 1,
        date: '2022-02-11',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2022-03-14 19:10:39',
        updated_at: '2022-03-14 19:10:39'
      },
      {
        id: 1133,
        user_id: 1,
        date: '2022-02-12',
        customer: 'mix',
        seller: 'seller1',
        item: 19,
        payments: 0,
        remarks: null,
        created_at: '2022-03-14 19:10:49',
        updated_at: '2022-03-14 19:11:35'
      },
      {
        id: 1134,
        user_id: 1,
        date: '2022-02-13',
        customer: 'mix',
        seller: 'seller1',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2022-03-14 19:11:16',
        updated_at: '2022-03-14 19:11:16'
      },
      {
        id: 1135,
        user_id: 1,
        date: '2022-02-14',
        customer: 'mix',
        seller: 'seller1',
        item: 26,
        payments: 0,
        remarks: null,
        created_at: '2022-03-14 19:12:05',
        updated_at: '2022-03-14 19:13:19'
      },
      {
        id: 1136,
        user_id: 1,
        date: '2022-02-15',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2022-03-14 19:12:59',
        updated_at: '2022-03-14 19:12:59'
      },
      {
        id: 1137,
        user_id: 1,
        date: '2022-02-16',
        customer: 'mix',
        seller: 'seller1',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2022-03-14 19:13:42',
        updated_at: '2022-03-14 19:13:42'
      },
      {
        id: 1138,
        user_id: 1,
        date: '2022-02-17',
        customer: 'mix',
        seller: 'seller1',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2022-03-14 19:14:02',
        updated_at: '2022-03-14 19:14:02'
      },
      {
        id: 1139,
        user_id: 1,
        date: '2022-02-18',
        customer: 'mix',
        seller: 'seller1',
        item: 3,
        payments: 0,
        remarks: null,
        created_at: '2022-03-14 19:14:16',
        updated_at: '2022-03-14 19:14:16'
      },
      {
        id: 1140,
        user_id: 1,
        date: '2022-02-19',
        customer: 'mix',
        seller: 'seller1',
        item: 8,
        payments: 0,
        remarks: null,
        created_at: '2022-03-14 19:14:31',
        updated_at: '2022-03-14 19:14:31'
      },
      {
        id: 1141,
        user_id: 1,
        date: '2022-02-20',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2022-03-14 19:14:53',
        updated_at: '2022-03-14 19:14:53'
      },
      {
        id: 1142,
        user_id: 1,
        date: '2022-02-21',
        customer: 'mix',
        seller: 'seller1',
        item: 24,
        payments: 0,
        remarks: null,
        created_at: '2022-03-14 19:15:10',
        updated_at: '2022-03-14 19:15:10'
      },
      {
        id: 1143,
        user_id: 1,
        date: '2022-02-22',
        customer: 'mix',
        seller: 'seller1',
        item: 3,
        payments: 0,
        remarks: null,
        created_at: '2022-03-14 19:15:39',
        updated_at: '2022-03-14 19:15:39'
      },
      {
        id: 1144,
        user_id: 1,
        date: '2022-02-23',
        customer: 'mix',
        seller: 'seller1',
        item: 8,
        payments: 0,
        remarks: '1 free B.Roger',
        created_at: '2022-03-14 19:16:35',
        updated_at: '2022-03-14 19:16:35'
      },
      {
        id: 1145,
        user_id: 1,
        date: '2022-02-24',
        customer: 'mix',
        seller: 'seller1',
        item: 7,
        payments: 0,
        remarks: '1 free Sis.Leonora\n1 free addpro',
        created_at: '2022-03-14 19:17:32',
        updated_at: '2022-03-14 19:17:32'
      },
      {
        id: 1146,
        user_id: 1,
        date: '2022-02-25',
        customer: 'mix',
        seller: 'seller1',
        item: 3,
        payments: 0,
        remarks: '1 free Barracks',
        created_at: '2022-03-14 19:18:25',
        updated_at: '2022-03-14 19:18:25'
      },
      {
        id: 1147,
        user_id: 1,
        date: '2022-02-27',
        customer: 'mix',
        seller: 'seller1',
        item: 3,
        payments: 0,
        remarks: '1 free Local',
        created_at: '2022-03-14 19:18:43',
        updated_at: '2022-03-14 19:19:16'
      },
      {
        id: 1148,
        user_id: 1,
        date: '2022-02-02',
        customer: 'mix',
        seller: 'seller2',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2022-03-14 19:21:23',
        updated_at: '2022-05-18 21:22:49'
      },
      {
        id: 1149,
        user_id: 1,
        date: '2022-02-03',
        customer: 'mix',
        seller: 'seller2',
        item: 13,
        payments: 0,
        remarks: null,
        created_at: '2022-03-14 19:21:43',
        updated_at: '2022-05-18 21:16:15'
      },
      {
        id: 1150,
        user_id: 1,
        date: '2022-02-05',
        customer: 'mix',
        seller: 'seller2',
        item: 8,
        payments: 0,
        remarks: '2 standby',
        created_at: '2022-03-14 19:22:26',
        updated_at: '2022-05-18 21:31:03'
      },
      {
        id: 1151,
        user_id: 1,
        date: '2022-02-06',
        customer: 'mix',
        seller: 'seller2',
        item: 30,
        payments: 0,
        remarks: '4 standby',
        created_at: '2022-03-14 19:23:00',
        updated_at: '2022-03-14 19:24:11'
      },
      {
        id: 1152,
        user_id: 1,
        date: '2022-02-07',
        customer: 'mix',
        seller: 'seller2',
        item: 12,
        payments: 0,
        remarks: null,
        created_at: '2022-03-14 19:24:44',
        updated_at: '2022-03-14 19:24:44'
      },
      {
        id: 1153,
        user_id: 1,
        date: '2022-02-08',
        customer: 'mix',
        seller: 'seller2',
        item: 18,
        payments: 0,
        remarks: null,
        created_at: '2022-03-14 19:25:11',
        updated_at: '2022-03-14 19:25:11'
      },
      {
        id: 1154,
        user_id: 1,
        date: '2022-02-11',
        customer: 'mix',
        seller: 'seller2',
        item: 9,
        payments: 0,
        remarks: '3 standby',
        created_at: '2022-03-14 19:25:52',
        updated_at: '2022-03-14 19:25:52'
      },
      {
        id: 1155,
        user_id: 1,
        date: '2022-02-12',
        customer: 'mix',
        seller: 'seller2',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2022-03-14 19:26:15',
        updated_at: '2022-03-14 19:26:15'
      },
      {
        id: 1156,
        user_id: 1,
        date: '2022-02-14',
        customer: 'mix',
        seller: 'seller2',
        item: 13,
        payments: 0,
        remarks: '2 standby',
        created_at: '2022-03-14 19:26:40',
        updated_at: '2022-03-14 19:26:40'
      },
      {
        id: 1157,
        user_id: 1,
        date: '2022-02-15',
        customer: 'mix',
        seller: 'seller2',
        item: 31,
        payments: 0,
        remarks: '3 standby',
        created_at: '2022-03-14 19:27:12',
        updated_at: '2022-03-14 19:27:12'
      },
      {
        id: 1158,
        user_id: 1,
        date: '2022-02-17',
        customer: 'mix',
        seller: 'seller2',
        item: 8,
        payments: 0,
        remarks: null,
        created_at: '2022-03-14 19:27:51',
        updated_at: '2022-03-14 19:27:51'
      },
      {
        id: 1159,
        user_id: 1,
        date: '2022-02-18',
        customer: 'mix',
        seller: 'seller2',
        item: 32,
        payments: 0,
        remarks: null,
        created_at: '2022-03-14 19:28:22',
        updated_at: '2022-03-14 19:28:22'
      },
      {
        id: 1160,
        user_id: 1,
        date: '2022-02-20',
        customer: 'mix',
        seller: 'seller2',
        item: 12,
        payments: 0,
        remarks: null,
        created_at: '2022-03-14 19:28:48',
        updated_at: '2022-03-14 19:28:48'
      },
      {
        id: 1161,
        user_id: 1,
        date: '2022-02-22',
        customer: 'mix',
        seller: 'seller2',
        item: 6,
        payments: 0,
        remarks: '4 standby',
        created_at: '2022-03-14 19:29:21',
        updated_at: '2022-03-14 19:29:21'
      },
      {
        id: 1162,
        user_id: 1,
        date: '2022-02-23',
        customer: 'mix',
        seller: 'seller2',
        item: 14,
        payments: 0,
        remarks: null,
        created_at: '2022-03-14 19:29:46',
        updated_at: '2022-03-14 19:29:46'
      },
      {
        id: 1163,
        user_id: 1,
        date: '2022-02-24',
        customer: 'mix',
        seller: 'seller2',
        item: 9,
        payments: 0,
        remarks: null,
        created_at: '2022-03-14 19:30:08',
        updated_at: '2022-03-14 19:30:08'
      },
      {
        id: 1164,
        user_id: 1,
        date: '2022-02-25',
        customer: 'mix',
        seller: 'seller2',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2022-03-14 19:30:32',
        updated_at: '2022-03-14 19:30:32'
      },
      {
        id: 1165,
        user_id: 1,
        date: '2022-02-26',
        customer: 'mix',
        seller: 'seller2',
        item: 13,
        payments: 0,
        remarks: '2 standby',
        created_at: '2022-03-14 19:30:58',
        updated_at: '2022-03-14 19:32:22'
      },
      {
        id: 1166,
        user_id: 1,
        date: '2022-02-27',
        customer: 'mix',
        seller: 'seller2',
        item: 3,
        payments: 0,
        remarks: '7 standby',
        created_at: '2022-03-14 19:31:38',
        updated_at: '2022-03-14 19:31:38'
      },
      {
        id: 1167,
        user_id: 1,
        date: '2022-03-01',
        customer: 'mix',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2022-03-30 07:37:03',
        updated_at: '2022-03-30 07:37:03'
      },
      {
        id: 1168,
        user_id: 1,
        date: '2022-03-02',
        customer: 'mix',
        seller: 'station',
        item: 5,
        payments: 5,
        remarks: null,
        created_at: '2022-03-30 07:37:36',
        updated_at: '2022-03-30 07:37:36'
      },
      {
        id: 1169,
        user_id: 1,
        date: '2022-03-03',
        customer: 'mix',
        seller: 'station',
        item: 22,
        payments: 22,
        remarks: null,
        created_at: '2022-03-30 07:38:04',
        updated_at: '2022-03-30 07:38:04'
      },
      {
        id: 1170,
        user_id: 1,
        date: '2022-03-06',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2022-03-30 07:38:53',
        updated_at: '2022-03-30 07:38:53'
      },
      {
        id: 1171,
        user_id: 1,
        date: '2022-03-07',
        customer: 'mix',
        seller: 'station',
        item: 3,
        payments: 3,
        remarks: null,
        created_at: '2022-03-30 07:39:21',
        updated_at: '2022-03-30 07:39:21'
      },
      {
        id: 1172,
        user_id: 1,
        date: '2022-03-08',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2022-03-30 07:39:40',
        updated_at: '2022-03-30 07:39:40'
      },
      {
        id: 1173,
        user_id: 1,
        date: '2022-03-09',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2022-03-30 07:40:15',
        updated_at: '2022-03-30 07:40:15'
      },
      {
        id: 1174,
        user_id: 1,
        date: '2022-03-09',
        customer: 'Bro Gerry',
        seller: 'station',
        item: 13,
        payments: 13,
        remarks: null,
        created_at: '2022-03-30 07:40:41',
        updated_at: '2022-10-31 17:36:12'
      },
      {
        id: 1175,
        user_id: 1,
        date: '2022-03-12',
        customer: 'mix',
        seller: 'station',
        item: 5,
        payments: 5,
        remarks: null,
        created_at: '2022-03-30 07:41:34',
        updated_at: '2022-03-30 07:41:34'
      },
      {
        id: 1176,
        user_id: 1,
        date: '2022-03-13',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2022-03-30 07:42:01',
        updated_at: '2022-03-30 07:42:01'
      },
      {
        id: 1177,
        user_id: 1,
        date: '2022-03-14',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2022-03-30 07:42:19',
        updated_at: '2022-03-30 07:42:19'
      },
      {
        id: 1178,
        user_id: 1,
        date: '2022-03-16',
        customer: 'B.Gerry',
        seller: 'station',
        item: 21,
        payments: 21,
        remarks: null,
        created_at: '2022-03-30 07:42:54',
        updated_at: '2022-03-30 07:42:54'
      },
      {
        id: 1179,
        user_id: 1,
        date: '2022-03-17',
        customer: 'mix',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2022-03-30 07:43:25',
        updated_at: '2022-03-30 07:43:25'
      },
      {
        id: 1180,
        user_id: 1,
        date: '2022-03-18',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2022-03-30 07:43:57',
        updated_at: '2022-03-30 07:43:57'
      },
      {
        id: 1181,
        user_id: 1,
        date: '2022-03-19',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2022-03-30 07:44:07',
        updated_at: '2022-03-30 07:44:07'
      },
      {
        id: 1182,
        user_id: 1,
        date: '2022-03-01',
        customer: 'mix',
        seller: 'seller1',
        item: 14,
        payments: 0,
        remarks: null,
        created_at: '2022-03-30 08:15:34',
        updated_at: '2022-03-30 08:15:34'
      },
      {
        id: 1183,
        user_id: 1,
        date: '2022-03-02',
        customer: 'mix',
        seller: 'seller1',
        item: 11,
        payments: 0,
        remarks: '30 bottle',
        created_at: '2022-03-30 08:17:07',
        updated_at: '2022-03-30 08:17:07'
      },
      {
        id: 1184,
        user_id: 1,
        date: '2022-03-04',
        customer: 'mix',
        seller: 'seller1',
        item: 13,
        payments: 0,
        remarks: null,
        created_at: '2022-03-30 08:17:59',
        updated_at: '2022-03-30 08:17:59'
      },
      {
        id: 1185,
        user_id: 1,
        date: '2022-03-05',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2022-03-30 08:18:16',
        updated_at: '2022-03-30 08:18:16'
      },
      {
        id: 1186,
        user_id: 1,
        date: '2022-03-06',
        customer: 'mix',
        seller: 'seller1',
        item: 7,
        payments: 0,
        remarks: '100 bottle',
        created_at: '2022-03-30 08:18:34',
        updated_at: '2022-03-30 08:20:51'
      },
      {
        id: 1187,
        user_id: 1,
        date: '2022-03-07',
        customer: 'mix',
        seller: 'seller1',
        item: 3,
        payments: 0,
        remarks: null,
        created_at: '2022-03-30 08:18:55',
        updated_at: '2022-03-30 08:18:55'
      },
      {
        id: 1188,
        user_id: 1,
        date: '2022-03-08',
        customer: 'mix',
        seller: 'seller1',
        item: 7,
        payments: 0,
        remarks: null,
        created_at: '2022-03-30 08:19:15',
        updated_at: '2022-03-30 08:19:15'
      },
      {
        id: 1189,
        user_id: 1,
        date: '2022-03-09',
        customer: 'mix',
        seller: 'seller1',
        item: 24,
        payments: 0,
        remarks: null,
        created_at: '2022-03-30 08:21:44',
        updated_at: '2022-03-30 08:21:44'
      },
      {
        id: 1190,
        user_id: 1,
        date: '2022-03-10',
        customer: 'mix',
        seller: 'seller1',
        item: 7,
        payments: 0,
        remarks: '1 baracks',
        created_at: '2022-03-30 08:22:26',
        updated_at: '2022-03-30 08:22:26'
      },
      {
        id: 1191,
        user_id: 1,
        date: '2022-03-11',
        customer: 'mix',
        seller: 'seller1',
        item: 17,
        payments: 0,
        remarks: null,
        created_at: '2022-03-30 08:22:48',
        updated_at: '2022-03-30 08:22:48'
      },
      {
        id: 1192,
        user_id: 1,
        date: '2022-03-12',
        customer: 'mix',
        seller: 'seller1',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2022-03-30 08:23:21',
        updated_at: '2022-03-30 08:23:21'
      },
      {
        id: 1193,
        user_id: 1,
        date: '2022-03-13',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2022-03-30 08:23:33',
        updated_at: '2022-03-30 08:23:33'
      },
      {
        id: 1194,
        user_id: 1,
        date: '2022-03-14',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: '2 baraks\n2 tlc',
        created_at: '2022-03-30 08:24:28',
        updated_at: '2022-03-30 08:24:28'
      },
      {
        id: 1195,
        user_id: 1,
        date: '2022-03-15',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: 0,
        remarks: '1 doktrina',
        created_at: '2022-03-30 08:25:06',
        updated_at: '2022-03-30 08:25:06'
      },
      {
        id: 1196,
        user_id: 1,
        date: '2022-03-16',
        customer: 'mix',
        seller: 'seller1',
        item: 12,
        payments: 0,
        remarks: '1 doktrina\n1 kdrama\n1 sis leonora\n210 bottles',
        created_at: '2022-03-30 08:25:51',
        updated_at: '2022-03-30 08:32:12'
      },
      {
        id: 1197,
        user_id: 1,
        date: '2022-03-17',
        customer: 'mix',
        seller: 'seller1',
        item: 12,
        payments: 0,
        remarks: null,
        created_at: '2022-03-30 08:32:51',
        updated_at: '2022-03-30 08:32:51'
      },
      {
        id: 1198,
        user_id: 1,
        date: '2022-03-18',
        customer: 'mix',
        seller: 'seller1',
        item: 8,
        payments: 0,
        remarks: null,
        created_at: '2022-03-30 08:33:13',
        updated_at: '2022-03-30 08:33:13'
      },
      {
        id: 1199,
        user_id: 1,
        date: '2022-03-19',
        customer: 'mix',
        seller: 'seller1',
        item: 9,
        payments: 0,
        remarks: null,
        created_at: '2022-03-30 08:33:34',
        updated_at: '2022-03-30 08:33:34'
      },
      {
        id: 1200,
        user_id: 1,
        date: '2022-03-01',
        customer: 'mix',
        seller: 'seller2',
        item: 40,
        payments: 0,
        remarks: null,
        created_at: '2022-03-30 08:34:13',
        updated_at: '2022-03-30 08:34:13'
      },
      {
        id: 1201,
        user_id: 1,
        date: '2022-03-03',
        customer: 'mix',
        seller: 'seller2',
        item: 40,
        payments: 0,
        remarks: null,
        created_at: '2022-03-30 08:34:51',
        updated_at: '2022-03-30 08:34:51'
      },
      {
        id: 1202,
        user_id: 1,
        date: '2022-03-04',
        customer: 'mix',
        seller: 'seller2',
        item: 4,
        payments: 0,
        remarks: '4 standby',
        created_at: '2022-03-30 08:35:16',
        updated_at: '2022-03-30 08:35:16'
      },
      {
        id: 1203,
        user_id: 1,
        date: '2022-03-06',
        customer: 'mix',
        seller: 'seller2',
        item: 9,
        payments: 0,
        remarks: null,
        created_at: '2022-03-30 08:35:47',
        updated_at: '2022-03-30 08:35:47'
      },
      {
        id: 1204,
        user_id: 1,
        date: '2022-03-07',
        customer: 'mix',
        seller: 'seller2',
        item: 17,
        payments: 0,
        remarks: null,
        created_at: '2022-03-30 08:36:15',
        updated_at: '2022-03-30 08:36:15'
      },
      {
        id: 1205,
        user_id: 1,
        date: '2022-03-08',
        customer: 'mix',
        seller: 'seller2',
        item: 16,
        payments: 0,
        remarks: null,
        created_at: '2022-03-30 08:36:30',
        updated_at: '2022-03-30 08:36:30'
      },
      {
        id: 1206,
        user_id: 1,
        date: '2022-03-09',
        customer: 'mix',
        seller: 'seller2',
        item: 19,
        payments: 0,
        remarks: '4 standby',
        created_at: '2022-03-30 08:36:55',
        updated_at: '2022-03-30 08:36:55'
      },
      {
        id: 1207,
        user_id: 1,
        date: '2022-03-10',
        customer: 'mix',
        seller: 'seller2',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2022-03-30 08:37:22',
        updated_at: '2022-03-30 08:37:22'
      },
      {
        id: 1208,
        user_id: 1,
        date: '2022-03-11',
        customer: 'mix',
        seller: 'seller2',
        item: 3,
        payments: 0,
        remarks: '4 standby',
        created_at: '2022-03-30 08:37:43',
        updated_at: '2022-03-30 08:37:43'
      },
      {
        id: 1209,
        user_id: 1,
        date: '2022-03-12',
        customer: 'mix',
        seller: 'seller2',
        item: 11,
        payments: 0,
        remarks: null,
        created_at: '2022-03-30 08:38:17',
        updated_at: '2022-03-30 08:38:17'
      },
      {
        id: 1210,
        user_id: 1,
        date: '2022-03-13',
        customer: 'mix',
        seller: 'seller2',
        item: 11,
        payments: 0,
        remarks: '7 standby',
        created_at: '2022-03-30 08:40:00',
        updated_at: '2022-03-30 08:40:00'
      },
      {
        id: 1211,
        user_id: 1,
        date: '2022-03-13',
        customer: 'mix',
        seller: 'seller2',
        item: 8,
        payments: 0,
        remarks: null,
        created_at: '2022-03-30 08:40:25',
        updated_at: '2022-03-30 08:40:25'
      },
      {
        id: 1212,
        user_id: 1,
        date: '2022-03-14',
        customer: 'mix',
        seller: 'seller2',
        item: 13,
        payments: 0,
        remarks: null,
        created_at: '2022-03-30 08:40:43',
        updated_at: '2022-03-30 08:40:43'
      },
      {
        id: 1213,
        user_id: 1,
        date: '2022-03-15',
        customer: 'mix',
        seller: 'seller2',
        item: 16,
        payments: 0,
        remarks: null,
        created_at: '2022-03-30 08:40:55',
        updated_at: '2022-03-30 08:42:40'
      },
      {
        id: 1214,
        user_id: 1,
        date: '2022-03-16',
        customer: 'mix',
        seller: 'seller2',
        item: 14,
        payments: 0,
        remarks: null,
        created_at: '2022-03-30 08:41:17',
        updated_at: '2022-03-30 08:41:17'
      },
      {
        id: 1215,
        user_id: 1,
        date: '2022-03-17',
        customer: 'mix',
        seller: 'seller2',
        item: 5,
        payments: 0,
        remarks: '5 standby',
        created_at: '2022-03-30 08:41:44',
        updated_at: '2022-03-30 08:41:44'
      },
      {
        id: 1216,
        user_id: 1,
        date: '2022-03-18',
        customer: 'mix',
        seller: 'seller2',
        item: 14,
        payments: 0,
        remarks: null,
        created_at: '2022-03-30 08:43:26',
        updated_at: '2022-03-30 08:43:26'
      },
      {
        id: 1217,
        user_id: 1,
        date: '2022-03-19',
        customer: 'mix',
        seller: 'seller2',
        item: 20,
        payments: 0,
        remarks: null,
        created_at: '2022-03-30 08:44:37',
        updated_at: '2022-03-30 08:44:37'
      },
      {
        id: 1218,
        user_id: 1,
        date: '2022-03-20',
        customer: 'mix',
        seller: 'seller2',
        item: 15,
        payments: 0,
        remarks: null,
        created_at: '2022-03-30 08:44:55',
        updated_at: '2022-03-30 08:44:55'
      },
      {
        id: 1232,
        user_id: 1,
        date: '2020-11-22',
        customer: 'mix',
        seller: 'seller2',
        item: 12,
        payments: 0,
        remarks: null,
        created_at: '2022-04-12 20:19:18',
        updated_at: '2022-05-18 21:38:23'
      },
      {
        id: 1233,
        user_id: 1,
        date: '2021-01-11',
        customer: 'mix',
        seller: 'seller2',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2022-04-12 20:45:58',
        updated_at: '2022-04-12 20:45:58'
      },
      {
        id: 1235,
        user_id: 1,
        date: '2021-11-27',
        customer: 'mix',
        seller: 'seller2',
        item: 11,
        payments: 11,
        remarks: null,
        created_at: '2022-04-13 11:01:39',
        updated_at: '2022-04-13 11:01:39'
      },
      {
        id: 1236,
        user_id: 1,
        date: '2021-11-29',
        customer: 'mix',
        seller: 'seller2',
        item: 16,
        payments: 16,
        remarks: null,
        created_at: '2022-04-13 11:02:02',
        updated_at: '2022-04-13 11:02:02'
      },
      {
        id: 1237,
        user_id: 1,
        date: '2021-12-09',
        customer: 'mix',
        seller: 'seller2',
        item: 7,
        payments: 7,
        remarks: null,
        created_at: '2022-04-13 11:06:18',
        updated_at: '2022-04-13 11:06:18'
      },
      {
        id: 1238,
        user_id: 1,
        date: '2022-04-03',
        customer: 'mix',
        seller: 'station',
        item: 5,
        payments: 5,
        remarks: null,
        created_at: '2022-05-13 13:12:35',
        updated_at: '2022-05-13 13:12:35'
      },
      {
        id: 1239,
        user_id: 1,
        date: '2022-04-04',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2022-05-13 13:13:14',
        updated_at: '2022-05-13 13:13:14'
      },
      {
        id: 1240,
        user_id: 1,
        date: '2022-04-05',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2022-05-13 13:13:40',
        updated_at: '2022-05-13 13:13:40'
      },
      {
        id: 1242,
        user_id: 1,
        date: '2022-04-10',
        customer: 'B.Gerry',
        seller: 'station',
        item: 17,
        payments: 17,
        remarks: null,
        created_at: '2022-05-13 13:15:20',
        updated_at: '2022-05-13 13:15:20'
      },
      {
        id: 1251,
        user_id: 1,
        date: '2022-04-05',
        customer: 'mix',
        seller: 'seller1',
        item: 25,
        payments: 0,
        remarks: null,
        created_at: '2022-05-13 18:15:28',
        updated_at: '2022-05-13 18:15:28'
      },
      {
        id: 1252,
        user_id: 1,
        date: '2022-04-08',
        customer: 'mix',
        seller: 'seller1',
        item: 11,
        payments: 0,
        remarks: null,
        created_at: '2022-05-13 18:15:56',
        updated_at: '2022-05-13 18:15:56'
      },
      {
        id: 1253,
        user_id: 1,
        date: '2022-04-09',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2022-05-13 18:16:15',
        updated_at: '2022-05-13 18:16:15'
      },
      {
        id: 1254,
        user_id: 1,
        date: '2022-04-11',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2022-05-13 18:16:47',
        updated_at: '2022-05-13 18:16:47'
      },
      {
        id: 1255,
        user_id: 1,
        date: '2022-04-12',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2022-05-13 18:17:12',
        updated_at: '2022-05-13 18:17:12'
      },
      {
        id: 1256,
        user_id: 1,
        date: '2022-04-13',
        customer: 'mix',
        seller: 'seller1',
        item: 9,
        payments: 0,
        remarks: null,
        created_at: '2022-05-13 18:17:39',
        updated_at: '2022-05-13 18:17:54'
      },
      {
        id: 1257,
        user_id: 1,
        date: '2022-04-14',
        customer: 'mix',
        seller: 'seller1',
        item: 2,
        payments: 0,
        remarks: null,
        created_at: '2022-05-13 18:18:14',
        updated_at: '2022-05-13 18:18:14'
      },
      {
        id: 1258,
        user_id: 1,
        date: '2022-04-16',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2022-05-13 18:18:30',
        updated_at: '2022-05-13 18:18:30'
      },
      {
        id: 1259,
        user_id: 1,
        date: '2022-04-19',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2022-05-13 18:18:52',
        updated_at: '2022-05-13 18:18:52'
      },
      {
        id: 1260,
        user_id: 1,
        date: '2022-04-20',
        customer: 'mix',
        seller: 'seller1',
        item: 8,
        payments: 0,
        remarks: null,
        created_at: '2022-05-13 18:19:07',
        updated_at: '2022-05-13 18:19:07'
      },
      {
        id: 1261,
        user_id: 1,
        date: '2022-04-21',
        customer: 'mix',
        seller: 'seller1',
        item: 8,
        payments: 0,
        remarks: null,
        created_at: '2022-05-13 18:19:19',
        updated_at: '2022-05-13 18:19:19'
      },
      {
        id: 1262,
        user_id: 1,
        date: '2022-04-22',
        customer: 'mix',
        seller: 'seller1',
        item: 3,
        payments: 0,
        remarks: null,
        created_at: '2022-05-13 18:19:33',
        updated_at: '2022-05-13 18:20:00'
      },
      {
        id: 1263,
        user_id: 1,
        date: '2022-04-23',
        customer: 'mix',
        seller: 'seller1',
        item: 3,
        payments: 0,
        remarks: null,
        created_at: '2022-05-13 18:20:20',
        updated_at: '2022-05-13 18:20:20'
      },
      {
        id: 1264,
        user_id: 1,
        date: '2022-04-24',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2022-05-13 18:20:32',
        updated_at: '2022-05-13 18:20:32'
      },
      {
        id: 1265,
        user_id: 1,
        date: '2022-04-25',
        customer: 'mix',
        seller: 'seller1',
        item: 8,
        payments: 0,
        remarks: null,
        created_at: '2022-05-13 18:20:50',
        updated_at: '2022-05-13 18:20:50'
      },
      {
        id: 1266,
        user_id: 1,
        date: '2022-04-26',
        customer: 'mix',
        seller: 'seller1',
        item: 11,
        payments: 0,
        remarks: null,
        created_at: '2022-05-13 18:21:06',
        updated_at: '2022-05-13 18:21:06'
      },
      {
        id: 1267,
        user_id: 1,
        date: '2022-04-27',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: 0,
        remarks: '300 bottles dupay',
        created_at: '2022-05-13 18:22:08',
        updated_at: '2022-05-13 18:22:08'
      },
      {
        id: 1268,
        user_id: 1,
        date: '2022-04-28',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2022-05-13 18:22:28',
        updated_at: '2022-05-13 18:22:28'
      },
      {
        id: 1269,
        user_id: 1,
        date: '2022-04-29',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2022-05-13 18:22:38',
        updated_at: '2022-05-13 18:22:38'
      },
      {
        id: 1270,
        user_id: 1,
        date: '2022-04-30',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2022-05-13 18:22:56',
        updated_at: '2022-05-13 18:22:56'
      },
      {
        id: 1271,
        user_id: 1,
        date: '2022-04-05',
        customer: 'mix',
        seller: 'seller2',
        item: 17,
        payments: 0,
        remarks: null,
        created_at: '2022-05-13 18:23:29',
        updated_at: '2022-05-13 18:23:29'
      },
      {
        id: 1272,
        user_id: 1,
        date: '2022-04-06',
        customer: 'mix',
        seller: 'seller2',
        item: 17,
        payments: 0,
        remarks: null,
        created_at: '2022-05-13 18:23:49',
        updated_at: '2022-05-13 18:23:49'
      },
      {
        id: 1273,
        user_id: 1,
        date: '2022-04-07',
        customer: 'mix',
        seller: 'seller2',
        item: 15,
        payments: 0,
        remarks: null,
        created_at: '2022-05-13 18:24:07',
        updated_at: '2022-05-13 18:24:07'
      },
      {
        id: 1274,
        user_id: 1,
        date: '2022-04-08',
        customer: 'mix',
        seller: 'seller2',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2022-05-13 18:24:22',
        updated_at: '2022-05-13 18:24:22'
      },
      {
        id: 1275,
        user_id: 1,
        date: '2022-04-10',
        customer: 'mix',
        seller: 'seller2',
        item: 3,
        payments: 0,
        remarks: '2 standby',
        created_at: '2022-05-13 18:24:48',
        updated_at: '2022-05-13 18:24:48'
      },
      {
        id: 1276,
        user_id: 1,
        date: '2022-04-11',
        customer: 'mix',
        seller: 'seller2',
        item: 29,
        payments: 0,
        remarks: null,
        created_at: '2022-05-13 18:25:21',
        updated_at: '2022-05-13 18:25:21'
      },
      {
        id: 1278,
        user_id: 1,
        date: '2022-04-12',
        customer: 'mix',
        seller: 'seller2',
        item: 9,
        payments: 0,
        remarks: null,
        created_at: '2022-05-13 18:26:11',
        updated_at: '2022-05-13 18:26:11'
      },
      {
        id: 1279,
        user_id: 1,
        date: '2022-04-14',
        customer: 'mix',
        seller: 'seller2',
        item: 14,
        payments: 0,
        remarks: null,
        created_at: '2022-05-13 18:26:44',
        updated_at: '2022-05-13 18:26:44'
      },
      {
        id: 1280,
        user_id: 1,
        date: '2022-04-15',
        customer: 'mix',
        seller: 'seller2',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2022-05-13 18:27:06',
        updated_at: '2022-05-13 18:27:06'
      },
      {
        id: 1281,
        user_id: 1,
        date: '2022-04-16',
        customer: 'mix',
        seller: 'seller2',
        item: 10,
        payments: 0,
        remarks: '4 standby',
        created_at: '2022-05-13 18:29:16',
        updated_at: '2022-05-13 18:29:16'
      },
      {
        id: 1282,
        user_id: 1,
        date: '2022-04-18',
        customer: 'mix',
        seller: 'seller2',
        item: 17,
        payments: 0,
        remarks: '2 standby',
        created_at: '2022-05-13 18:29:53',
        updated_at: '2022-05-13 18:29:53'
      },
      {
        id: 1283,
        user_id: 1,
        date: '2022-04-19',
        customer: 'mix',
        seller: 'seller2',
        item: 7,
        payments: 0,
        remarks: '4standb y',
        created_at: '2022-05-13 18:30:35',
        updated_at: '2022-05-13 18:30:35'
      },
      {
        id: 1284,
        user_id: 1,
        date: '2022-04-20',
        customer: 'mix',
        seller: 'seller2',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2022-05-13 18:31:22',
        updated_at: '2022-05-13 18:31:22'
      },
      {
        id: 1285,
        user_id: 1,
        date: '2022-04-21',
        customer: 'mix',
        seller: 'seller2',
        item: 15,
        payments: 0,
        remarks: null,
        created_at: '2022-05-13 18:31:54',
        updated_at: '2022-05-13 18:31:54'
      },
      {
        id: 1286,
        user_id: 1,
        date: '2022-04-22',
        customer: 'mix',
        seller: 'seller2',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2022-05-13 18:32:44',
        updated_at: '2022-05-13 18:32:44'
      },
      {
        id: 1287,
        user_id: 1,
        date: '2022-04-23',
        customer: 'mix',
        seller: 'seller2',
        item: 15,
        payments: 0,
        remarks: null,
        created_at: '2022-05-13 18:34:42',
        updated_at: '2022-05-13 18:34:42'
      },
      {
        id: 1288,
        user_id: 1,
        date: '2022-04-24',
        customer: 'mix',
        seller: 'seller2',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2022-05-13 18:35:37',
        updated_at: '2022-05-13 18:35:37'
      },
      {
        id: 1289,
        user_id: 1,
        date: '2022-04-25',
        customer: 'mix',
        seller: 'seller2',
        item: 12,
        payments: 0,
        remarks: null,
        created_at: '2022-05-13 18:36:01',
        updated_at: '2022-05-13 18:36:01'
      },
      {
        id: 1290,
        user_id: 1,
        date: '2022-04-26',
        customer: 'mix',
        seller: 'seller2',
        item: 20,
        payments: 0,
        remarks: '3 standby',
        created_at: '2022-05-13 18:36:49',
        updated_at: '2022-05-13 18:36:49'
      },
      {
        id: 1291,
        user_id: 1,
        date: '2022-04-27',
        customer: 'mix',
        seller: 'seller2',
        item: 12,
        payments: 0,
        remarks: '5 standby',
        created_at: '2022-05-13 18:37:28',
        updated_at: '2022-05-13 18:37:28'
      },
      {
        id: 1292,
        user_id: 1,
        date: '2022-04-28',
        customer: 'mix',
        seller: 'seller2',
        item: 8,
        payments: 0,
        remarks: '4 standby',
        created_at: '2022-05-13 18:38:26',
        updated_at: '2022-05-13 18:38:26'
      },
      {
        id: 1293,
        user_id: 1,
        date: '2022-04-29',
        customer: 'mix',
        seller: 'seller2',
        item: 32,
        payments: 0,
        remarks: null,
        created_at: '2022-05-13 18:38:57',
        updated_at: '2022-05-13 18:38:57'
      },
      {
        id: 1294,
        user_id: 1,
        date: '2022-04-30',
        customer: 'mix',
        seller: 'seller2',
        item: 7,
        payments: 0,
        remarks: null,
        created_at: '2022-05-13 18:39:25',
        updated_at: '2022-05-13 18:39:25'
      },
      {
        id: 1295,
        user_id: 1,
        date: '2022-04-13',
        customer: 'mix',
        seller: 'station',
        item: 12,
        payments: 12,
        remarks: null,
        created_at: '2022-05-13 21:09:42',
        updated_at: '2022-05-13 21:09:42'
      },
      {
        id: 1296,
        user_id: 1,
        date: '2022-04-19',
        customer: 'mix',
        seller: 'station',
        item: 8,
        payments: 8,
        remarks: null,
        created_at: '2022-05-13 21:10:30',
        updated_at: '2022-05-13 21:10:30'
      },
      {
        id: 1297,
        user_id: 1,
        date: '2022-04-06',
        customer: 'mix',
        seller: 'station',
        item: 5,
        payments: 5,
        remarks: null,
        created_at: '2022-05-13 21:14:02',
        updated_at: '2022-05-13 21:14:02'
      },
      {
        id: 1298,
        user_id: 1,
        date: '2022-04-11',
        customer: 'mix',
        seller: 'station',
        item: 3,
        payments: 3,
        remarks: null,
        created_at: '2022-05-13 21:15:08',
        updated_at: '2022-05-13 21:15:08'
      },
      {
        id: 1299,
        user_id: 1,
        date: '2022-04-21',
        customer: 'mix',
        seller: 'station',
        item: 3,
        payments: 3,
        remarks: null,
        created_at: '2022-05-13 21:15:45',
        updated_at: '2022-05-13 21:15:45'
      },
      {
        id: 1300,
        user_id: 1,
        date: '2022-04-23',
        customer: 'mix',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2022-05-13 21:16:14',
        updated_at: '2022-05-13 21:16:14'
      },
      {
        id: 1301,
        user_id: 1,
        date: '2022-04-26',
        customer: 'B.Gerry',
        seller: 'station',
        item: 31,
        payments: 31,
        remarks: null,
        created_at: '2022-05-13 21:17:20',
        updated_at: '2022-05-13 21:17:20'
      },
      {
        id: 1302,
        user_id: 1,
        date: '2022-04-29',
        customer: 'mix',
        seller: 'station',
        item: 3,
        payments: 3,
        remarks: null,
        created_at: '2022-05-13 21:18:05',
        updated_at: '2022-05-13 21:18:05'
      },
      {
        id: 1303,
        user_id: 1,
        date: '2022-05-01',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2022-06-01 05:03:07',
        updated_at: '2022-06-01 05:03:07'
      },
      {
        id: 1304,
        user_id: 1,
        date: '2022-05-02',
        customer: 'mix',
        seller: 'station',
        item: 8,
        payments: 8,
        remarks: null,
        created_at: '2022-06-01 05:03:37',
        updated_at: '2022-06-01 05:03:37'
      },
      {
        id: 1305,
        user_id: 1,
        date: '2022-05-03',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2022-06-01 05:03:54',
        updated_at: '2022-06-01 05:03:54'
      },
      {
        id: 1306,
        user_id: 1,
        date: '2022-05-03',
        customer: 'B.Gerry',
        seller: 'station',
        item: 23,
        payments: 23,
        remarks: null,
        created_at: '2022-06-01 05:04:44',
        updated_at: '2022-06-01 05:04:44'
      },
      {
        id: 1307,
        user_id: 1,
        date: '2022-05-05',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2022-06-01 05:05:36',
        updated_at: '2022-06-01 05:05:36'
      },
      {
        id: 1308,
        user_id: 1,
        date: '2022-05-06',
        customer: 'mix',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2022-06-01 05:05:57',
        updated_at: '2022-06-01 05:05:57'
      },
      {
        id: 1309,
        user_id: 1,
        date: '2022-05-07',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2022-06-01 05:06:19',
        updated_at: '2022-06-01 05:06:19'
      },
      {
        id: 1310,
        user_id: 1,
        date: '2022-05-08',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2022-06-01 05:06:32',
        updated_at: '2022-06-01 05:06:32'
      },
      {
        id: 1311,
        user_id: 1,
        date: '2022-05-10',
        customer: 'mix',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2022-06-01 05:07:14',
        updated_at: '2022-06-01 05:07:14'
      },
      {
        id: 1312,
        user_id: 1,
        date: '2022-05-11',
        customer: 'mix',
        seller: 'station',
        item: 3,
        payments: 3,
        remarks: null,
        created_at: '2022-06-01 05:07:34',
        updated_at: '2022-06-01 05:07:34'
      },
      {
        id: 1313,
        user_id: 1,
        date: '2022-05-12',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2022-06-01 05:08:09',
        updated_at: '2022-06-01 05:08:09'
      },
      {
        id: 1314,
        user_id: 1,
        date: '2022-05-13',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2022-06-01 05:08:19',
        updated_at: '2022-06-01 05:08:19'
      },
      {
        id: 1315,
        user_id: 1,
        date: '2022-05-15',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2022-06-01 05:09:28',
        updated_at: '2022-06-01 05:09:28'
      },
      {
        id: 1316,
        user_id: 1,
        date: '2022-05-16',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2022-06-01 05:09:46',
        updated_at: '2022-06-01 05:09:46'
      },
      {
        id: 1317,
        user_id: 1,
        date: '2022-05-24',
        customer: 'mix',
        seller: 'station',
        item: 16,
        payments: 16,
        remarks: null,
        created_at: '2022-06-01 05:10:54',
        updated_at: '2022-06-01 05:10:54'
      },
      {
        id: 1318,
        user_id: 1,
        date: '2022-05-28',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2022-06-01 05:11:21',
        updated_at: '2022-06-01 05:11:21'
      },
      {
        id: 1319,
        user_id: 1,
        date: '2022-05-21',
        customer: 'mix',
        seller: 'station',
        item: 6,
        payments: 6,
        remarks: null,
        created_at: '2022-06-01 05:16:02',
        updated_at: '2022-06-01 05:16:02'
      },
      {
        id: 1320,
        user_id: 1,
        date: '2022-05-24',
        customer: 'mix',
        seller: 'station',
        item: 16,
        payments: 16,
        remarks: null,
        created_at: '2022-06-01 05:18:01',
        updated_at: '2022-06-01 05:18:01'
      },
      {
        id: 1321,
        user_id: 1,
        date: '2022-05-28',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2022-06-01 05:18:43',
        updated_at: '2022-06-01 05:18:43'
      },
      {
        id: 1322,
        user_id: 1,
        date: '2022-05-31',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2022-06-01 05:18:59',
        updated_at: '2022-06-01 05:18:59'
      },
      {
        id: 1324,
        user_id: 1,
        date: '2022-05-11',
        customer: 'B.Gerry',
        seller: 'station',
        item: 24,
        payments: 24,
        remarks: null,
        created_at: '2022-06-01 05:27:38',
        updated_at: '2022-06-01 05:27:38'
      },
      {
        id: 1325,
        user_id: 1,
        date: '2022-05-01',
        customer: 'mix',
        seller: 'seller1',
        item: 22,
        payments: 0,
        remarks: '3 free',
        created_at: '2022-06-01 06:16:23',
        updated_at: '2022-06-01 06:16:23'
      },
      {
        id: 1326,
        user_id: 1,
        date: '2022-05-03',
        customer: 'mix',
        seller: 'seller1',
        item: 13,
        payments: 0,
        remarks: '200 bottles\n50 bottles bautismo',
        created_at: '2022-06-01 06:16:59',
        updated_at: '2022-06-01 06:18:09'
      },
      {
        id: 1327,
        user_id: 1,
        date: '2022-05-05',
        customer: 'mix',
        seller: 'seller1',
        item: 8,
        payments: 0,
        remarks: null,
        created_at: '2022-06-01 06:18:39',
        updated_at: '2022-06-01 06:18:39'
      },
      {
        id: 1328,
        user_id: 1,
        date: '2022-05-06',
        customer: 'mix',
        seller: 'seller1',
        item: 11,
        payments: 0,
        remarks: null,
        created_at: '2022-06-01 06:18:57',
        updated_at: '2022-06-01 06:18:57'
      },
      {
        id: 1329,
        user_id: 1,
        date: '2022-05-07',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2022-06-01 06:19:17',
        updated_at: '2022-06-01 06:19:17'
      },
      {
        id: 1330,
        user_id: 1,
        date: '2022-05-08',
        customer: 'mix',
        seller: 'seller1',
        item: 7,
        payments: 0,
        remarks: '2 free',
        created_at: '2022-06-01 06:19:47',
        updated_at: '2022-06-01 06:19:47'
      },
      {
        id: 1331,
        user_id: 1,
        date: '2022-05-10',
        customer: 'mix',
        seller: 'seller1',
        item: 7,
        payments: 0,
        remarks: '1 free',
        created_at: '2022-06-01 06:20:26',
        updated_at: '2022-06-01 06:20:26'
      },
      {
        id: 1332,
        user_id: 1,
        date: '2022-05-11',
        customer: 'mix',
        seller: 'seller1',
        item: 3,
        payments: 0,
        remarks: '200 bottles dupay',
        created_at: '2022-06-01 06:21:10',
        updated_at: '2022-06-01 06:21:10'
      },
      {
        id: 1333,
        user_id: 1,
        date: '2022-05-12',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2022-06-01 06:21:34',
        updated_at: '2022-06-01 06:21:34'
      },
      {
        id: 1334,
        user_id: 1,
        date: '2022-05-19',
        customer: 'mix',
        seller: 'seller1',
        item: 22,
        payments: 0,
        remarks: null,
        created_at: '2022-06-01 06:22:19',
        updated_at: '2022-06-01 06:22:19'
      },
      {
        id: 1335,
        user_id: 1,
        date: '2022-05-21',
        customer: 'mix',
        seller: 'seller1',
        item: 13,
        payments: 0,
        remarks: null,
        created_at: '2022-06-01 06:22:47',
        updated_at: '2022-06-01 06:22:47'
      },
      {
        id: 1336,
        user_id: 1,
        date: '2022-05-23',
        customer: 'mix',
        seller: 'seller1',
        item: 14,
        payments: 0,
        remarks: '4 free',
        created_at: '2022-06-01 06:23:30',
        updated_at: '2022-06-01 06:23:30'
      },
      {
        id: 1337,
        user_id: 1,
        date: '2022-05-26',
        customer: 'mix',
        seller: 'seller1',
        item: 9,
        payments: 0,
        remarks: '2 free barracks',
        created_at: '2022-06-01 06:24:21',
        updated_at: '2022-06-01 06:24:21'
      },
      {
        id: 1338,
        user_id: 1,
        date: '2022-05-27',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: 0,
        remarks: '6 free locale',
        created_at: '2022-06-01 06:24:58',
        updated_at: '2022-06-01 06:24:58'
      },
      {
        id: 1339,
        user_id: 1,
        date: '2022-05-27',
        customer: 'mix',
        seller: 'seller1',
        item: 9,
        payments: 0,
        remarks: null,
        created_at: '2022-06-01 06:25:30',
        updated_at: '2022-06-01 06:25:30'
      },
      {
        id: 1340,
        user_id: 1,
        date: '2022-05-28',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: 0,
        remarks: '4 standby',
        created_at: '2022-06-01 06:25:58',
        updated_at: '2022-06-01 06:25:58'
      },
      {
        id: 1341,
        user_id: 1,
        date: '2022-05-29',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2022-06-01 06:26:19',
        updated_at: '2022-06-01 06:26:19'
      },
      {
        id: 1342,
        user_id: 1,
        date: '2022-05-31',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2022-06-01 06:26:41',
        updated_at: '2022-06-01 06:26:41'
      },
      {
        id: 1343,
        user_id: 1,
        date: '2022-05-01',
        customer: 'mix',
        seller: 'seller2',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2022-06-01 06:29:17',
        updated_at: '2022-06-01 06:29:17'
      },
      {
        id: 1344,
        user_id: 1,
        date: '2022-05-02',
        customer: 'mix',
        seller: 'seller2',
        item: 11,
        payments: 0,
        remarks: '4 standby',
        created_at: '2022-06-01 06:29:38',
        updated_at: '2022-06-01 06:29:38'
      },
      {
        id: 1345,
        user_id: 1,
        date: '2022-05-03',
        customer: 'mix',
        seller: 'seller2',
        item: 4,
        payments: 0,
        remarks: '4 standby',
        created_at: '2022-06-01 06:30:00',
        updated_at: '2022-06-01 06:30:00'
      },
      {
        id: 1346,
        user_id: 1,
        date: '2022-05-05',
        customer: 'mix',
        seller: 'seller2',
        item: 20,
        payments: 0,
        remarks: null,
        created_at: '2022-06-01 06:31:44',
        updated_at: '2022-06-01 06:31:44'
      },
      {
        id: 1347,
        user_id: 1,
        date: '2022-05-06',
        customer: 'mix',
        seller: 'seller2',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2022-06-01 06:31:58',
        updated_at: '2022-06-01 06:31:58'
      },
      {
        id: 1348,
        user_id: 1,
        date: '2022-05-08',
        customer: 'mix',
        seller: 'seller2',
        item: 23,
        payments: 0,
        remarks: '10 standby',
        created_at: '2022-06-01 06:32:31',
        updated_at: '2022-06-01 06:32:31'
      },
      {
        id: 1349,
        user_id: 1,
        date: '2022-05-11',
        customer: 'mix',
        seller: 'seller2',
        item: 20,
        payments: 0,
        remarks: null,
        created_at: '2022-06-01 06:33:15',
        updated_at: '2022-06-01 06:33:15'
      },
      {
        id: 1350,
        user_id: 1,
        date: '2022-05-13',
        customer: 'mix',
        seller: 'seller2',
        item: 27,
        payments: 0,
        remarks: null,
        created_at: '2022-06-01 06:33:39',
        updated_at: '2022-06-01 06:33:39'
      },
      {
        id: 1352,
        user_id: 1,
        date: '2022-05-14',
        customer: 'mix',
        seller: 'seller2',
        item: 20,
        payments: 0,
        remarks: null,
        created_at: '2022-06-01 06:34:07',
        updated_at: '2022-06-01 06:34:07'
      },
      {
        id: 1353,
        user_id: 1,
        date: '2022-05-15',
        customer: 'mix',
        seller: 'seller2',
        item: 12,
        payments: 0,
        remarks: '4 standby',
        created_at: '2022-06-01 06:34:40',
        updated_at: '2022-06-01 06:34:40'
      },
      {
        id: 1354,
        user_id: 1,
        date: '2022-05-16',
        customer: 'mix',
        seller: 'seller2',
        item: 17,
        payments: 0,
        remarks: null,
        created_at: '2022-06-01 06:35:36',
        updated_at: '2022-06-01 06:35:36'
      },
      {
        id: 1355,
        user_id: 1,
        date: '2022-05-18',
        customer: 'mix',
        seller: 'seller2',
        item: 10,
        payments: 0,
        remarks: '6 standby',
        created_at: '2022-06-01 06:36:08',
        updated_at: '2022-06-01 06:36:08'
      },
      {
        id: 1356,
        user_id: 1,
        date: '2022-05-21',
        customer: 'mix',
        seller: 'seller2',
        item: 16,
        payments: 0,
        remarks: null,
        created_at: '2022-06-01 06:37:49',
        updated_at: '2022-06-01 06:37:49'
      },
      {
        id: 1357,
        user_id: 1,
        date: '2022-05-22',
        customer: 'mix',
        seller: 'seller2',
        item: 24,
        payments: 0,
        remarks: '6 standby',
        created_at: '2022-06-01 06:38:30',
        updated_at: '2022-06-01 06:38:30'
      },
      {
        id: 1358,
        user_id: 1,
        date: '2022-05-23',
        customer: 'mix',
        seller: 'seller2',
        item: 27,
        payments: 0,
        remarks: '6 standby',
        created_at: '2022-06-01 06:38:53',
        updated_at: '2022-06-01 06:38:53'
      },
      {
        id: 1359,
        user_id: 1,
        date: '2022-05-24',
        customer: 'mix',
        seller: 'seller2',
        item: 16,
        payments: 0,
        remarks: null,
        created_at: '2022-06-01 06:39:25',
        updated_at: '2022-06-01 06:39:25'
      },
      {
        id: 1360,
        user_id: 1,
        date: '2022-05-25',
        customer: 'mix',
        seller: 'seller2',
        item: 14,
        payments: 0,
        remarks: '4 standby',
        created_at: '2022-06-01 06:40:17',
        updated_at: '2022-06-01 06:40:17'
      },
      {
        id: 1361,
        user_id: 1,
        date: '2022-05-27',
        customer: 'mix',
        seller: 'seller2',
        item: 11,
        payments: 0,
        remarks: '4 standby',
        created_at: '2022-06-01 06:40:35',
        updated_at: '2022-06-01 06:40:35'
      },
      {
        id: 1362,
        user_id: 1,
        date: '2022-05-30',
        customer: 'mix',
        seller: 'seller2',
        item: 22,
        payments: 0,
        remarks: '6 standby',
        created_at: '2022-06-01 06:41:28',
        updated_at: '2022-06-01 06:41:28'
      },
      {
        id: 1363,
        user_id: 1,
        date: '2022-05-31',
        customer: 'mix',
        seller: 'seller2',
        item: 16,
        payments: 0,
        remarks: null,
        created_at: '2022-06-01 06:42:04',
        updated_at: '2022-06-01 06:42:04'
      },
      {
        id: 1364,
        user_id: 1,
        date: '2022-06-01',
        customer: 'mix',
        seller: 'seller2',
        item: 12,
        payments: 0,
        remarks: null,
        created_at: '2022-06-01 06:42:46',
        updated_at: '2022-06-01 06:42:46'
      },
      {
        id: 1365,
        user_id: 1,
        date: '2022-05-18',
        customer: 'B.Gerry',
        seller: 'station',
        item: 25,
        payments: 25,
        remarks: null,
        created_at: '2022-06-01 06:47:50',
        updated_at: '2022-06-01 06:50:28'
      },
      {
        id: 1366,
        user_id: 1,
        date: '2022-05-01',
        customer: 'mix',
        seller: 'seller1',
        item: 11,
        payments: 0,
        remarks: '3 free barracks',
        created_at: '2022-06-01 06:52:29',
        updated_at: '2022-06-01 06:52:29'
      },
      {
        id: 1367,
        user_id: 1,
        date: '2022-06-05',
        customer: 'mix',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2022-06-12 02:43:25',
        updated_at: '2022-06-12 02:43:25'
      },
      {
        id: 1368,
        user_id: 1,
        date: '2022-06-06',
        customer: 'B.gerry',
        seller: 'station',
        item: 17,
        payments: 17,
        remarks: null,
        created_at: '2022-06-12 02:44:02',
        updated_at: '2022-06-12 02:44:02'
      },
      {
        id: 1369,
        user_id: 1,
        date: '2022-06-09',
        customer: 'mix',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2022-06-12 02:44:29',
        updated_at: '2022-06-12 02:44:29'
      },
      {
        id: 1370,
        user_id: 1,
        date: '2022-06-10',
        customer: 'mix',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2022-06-12 02:44:47',
        updated_at: '2022-06-12 02:44:47'
      },
      {
        id: 1371,
        user_id: 1,
        date: '2022-06-12',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2022-06-12 02:45:08',
        updated_at: '2022-06-12 02:45:08'
      },
      {
        id: 1372,
        user_id: 1,
        date: '2022-06-01',
        customer: 'mix',
        seller: 'seller1',
        item: 7,
        payments: 0,
        remarks: null,
        created_at: '2022-06-12 02:45:53',
        updated_at: '2022-06-12 02:45:53'
      },
      {
        id: 1373,
        user_id: 1,
        date: '2022-06-02',
        customer: 'mix',
        seller: 'seller1',
        item: 8,
        payments: 0,
        remarks: null,
        created_at: '2022-06-12 02:46:07',
        updated_at: '2022-06-12 02:46:07'
      },
      {
        id: 1374,
        user_id: 1,
        date: '2022-06-05',
        customer: 'mix',
        seller: 'seller1',
        item: 18,
        payments: 0,
        remarks: null,
        created_at: '2022-06-12 02:46:23',
        updated_at: '2022-06-12 02:46:23'
      },
      {
        id: 1375,
        user_id: 1,
        date: '2022-06-06',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2022-06-12 02:46:36',
        updated_at: '2022-06-12 02:46:36'
      },
      {
        id: 1376,
        user_id: 1,
        date: '2022-06-07',
        customer: 'mix',
        seller: 'seller1',
        item: 9,
        payments: 0,
        remarks: null,
        created_at: '2022-06-12 02:47:05',
        updated_at: '2022-06-12 02:47:05'
      },
      {
        id: 1377,
        user_id: 1,
        date: '2022-06-08',
        customer: 'mix',
        seller: 'seller1',
        item: 7,
        payments: 0,
        remarks: '1 free vip room',
        created_at: '2022-06-12 02:47:44',
        updated_at: '2022-06-12 02:47:44'
      },
      {
        id: 1378,
        user_id: 1,
        date: '2022-06-09',
        customer: 'mix',
        seller: 'seller1',
        item: 12,
        payments: 0,
        remarks: 'free:1 local, 1 baracks',
        created_at: '2022-06-12 02:48:45',
        updated_at: '2022-06-12 02:48:45'
      },
      {
        id: 1379,
        user_id: 1,
        date: '2022-06-10',
        customer: 'mix',
        seller: 'seller1',
        item: 8,
        payments: 0,
        remarks: '3 free',
        created_at: '2022-06-12 02:49:30',
        updated_at: '2022-06-12 02:52:13'
      },
      {
        id: 1380,
        user_id: 1,
        date: '2022-06-11',
        customer: 'mix',
        seller: 'seller1',
        item: 29,
        payments: 0,
        remarks: '2 free local, 150 bottle tlc ',
        created_at: '2022-06-12 02:51:26',
        updated_at: '2022-06-12 02:52:30'
      },
      {
        id: 1381,
        user_id: 1,
        date: '2022-06-03',
        customer: 'mix',
        seller: 'seller2',
        item: 13,
        payments: 0,
        remarks: null,
        created_at: '2022-06-12 02:53:12',
        updated_at: '2022-06-12 02:53:12'
      },
      {
        id: 1382,
        user_id: 1,
        date: '2022-06-04',
        customer: 'mix',
        seller: 'seller2',
        item: 14,
        payments: 0,
        remarks: null,
        created_at: '2022-06-12 02:53:39',
        updated_at: '2022-06-12 02:53:39'
      },
      {
        id: 1383,
        user_id: 1,
        date: '2022-06-05',
        customer: 'mix',
        seller: 'seller2',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2022-06-12 02:54:08',
        updated_at: '2022-06-12 02:54:08'
      },
      {
        id: 1384,
        user_id: 1,
        date: '2022-06-06',
        customer: 'mix',
        seller: 'seller2',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2022-06-12 02:54:26',
        updated_at: '2022-06-12 02:54:26'
      },
      {
        id: 1385,
        user_id: 1,
        date: '2022-06-07',
        customer: 'mix',
        seller: 'seller2',
        item: 22,
        payments: 0,
        remarks: null,
        created_at: '2022-06-12 02:54:52',
        updated_at: '2022-06-12 02:54:52'
      },
      {
        id: 1386,
        user_id: 1,
        date: '2022-06-08',
        customer: 'mix',
        seller: 'seller2',
        item: 16,
        payments: 0,
        remarks: '3 standby',
        created_at: '2022-06-12 02:55:30',
        updated_at: '2022-06-12 02:55:30'
      },
      {
        id: 1387,
        user_id: 1,
        date: '2022-06-10',
        customer: 'mix',
        seller: 'seller2',
        item: 11,
        payments: 0,
        remarks: null,
        created_at: '2022-06-12 02:56:24',
        updated_at: '2022-06-12 02:56:24'
      },
      {
        id: 1388,
        user_id: 1,
        date: '2022-06-11',
        customer: 'mix',
        seller: 'seller2',
        item: 16,
        payments: 0,
        remarks: null,
        created_at: '2022-06-12 02:56:41',
        updated_at: '2022-06-12 02:56:41'
      },
      {
        id: 1389,
        user_id: 1,
        date: '2022-06-12',
        customer: 'mix',
        seller: 'seller2',
        item: 11,
        payments: 0,
        remarks: null,
        created_at: '2022-06-12 02:57:12',
        updated_at: '2022-06-12 02:57:12'
      },
      {
        id: 1391,
        user_id: 1,
        date: '2022-06-14',
        customer: 'mix',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2022-06-18 10:52:58',
        updated_at: '2022-06-18 10:52:58'
      },
      {
        id: 1392,
        user_id: 1,
        date: '2022-06-15',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2022-06-18 10:53:19',
        updated_at: '2022-06-18 10:53:19'
      },
      {
        id: 1393,
        user_id: 1,
        date: '2022-06-13',
        customer: 'mix',
        seller: 'seller1',
        item: 20,
        payments: 0,
        remarks: null,
        created_at: '2022-06-18 10:55:07',
        updated_at: '2022-07-06 20:47:43'
      },
      {
        id: 1394,
        user_id: 1,
        date: '2022-06-13',
        customer: 'mix',
        seller: 'seller2',
        item: 8,
        payments: 0,
        remarks: null,
        created_at: '2022-06-18 10:56:39',
        updated_at: '2022-07-06 20:48:29'
      },
      {
        id: 1395,
        user_id: 1,
        date: '2022-06-14',
        customer: 'mix',
        seller: 'seller2',
        item: 14,
        payments: 0,
        remarks: null,
        created_at: '2022-06-18 10:56:56',
        updated_at: '2022-07-06 20:48:14'
      },
      {
        id: 1396,
        user_id: 1,
        date: '2022-06-15',
        customer: 'mix',
        seller: 'seller2',
        item: 14,
        payments: 0,
        remarks: null,
        created_at: '2022-06-18 10:57:12',
        updated_at: '2022-07-06 20:48:37'
      },
      {
        id: 1397,
        user_id: 1,
        date: '2022-06-16',
        customer: 'Tayabas',
        seller: 'station',
        item: 0,
        payments: 19,
        remarks: 'basyo 16',
        created_at: '2022-06-18 11:23:14',
        updated_at: '2022-06-18 11:23:14'
      },
      {
        id: 1398,
        user_id: 1,
        date: '2022-06-19',
        customer: 'mix',
        seller: 'seller1',
        item: 9,
        payments: 0,
        remarks: null,
        created_at: '2022-06-29 22:24:30',
        updated_at: '2022-06-29 22:24:30'
      },
      {
        id: 1399,
        user_id: 1,
        date: '2022-06-20',
        customer: 'mix',
        seller: 'seller1',
        item: 8,
        payments: 0,
        remarks: null,
        created_at: '2022-06-29 22:25:16',
        updated_at: '2022-06-29 22:25:16'
      },
      {
        id: 1400,
        user_id: 1,
        date: '2022-06-21',
        customer: 'mix',
        seller: 'seller1',
        item: 8,
        payments: 0,
        remarks: null,
        created_at: '2022-06-29 22:25:29',
        updated_at: '2022-06-29 22:25:29'
      },
      {
        id: 1401,
        user_id: 1,
        date: '2022-06-23',
        customer: 'mix',
        seller: 'seller1',
        item: 16,
        payments: 0,
        remarks: null,
        created_at: '2022-06-29 22:25:59',
        updated_at: '2022-06-29 22:25:59'
      },
      {
        id: 1402,
        user_id: 1,
        date: '2022-06-21',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: 0,
        remarks: '200 bottles ibabang dupay',
        created_at: '2022-06-29 22:27:52',
        updated_at: '2022-06-29 22:27:52'
      },
      {
        id: 1403,
        user_id: 1,
        date: '2022-06-24',
        customer: 'mix',
        seller: 'seller1',
        item: 1,
        payments: 0,
        remarks: '2 barracks ',
        created_at: '2022-06-29 22:28:39',
        updated_at: '2022-06-29 22:28:39'
      },
      {
        id: 1404,
        user_id: 1,
        date: '2022-06-25',
        customer: 'mix',
        seller: 'seller1',
        item: 7,
        payments: 0,
        remarks: '\n',
        created_at: '2022-06-29 22:29:00',
        updated_at: '2022-06-29 22:29:00'
      },
      {
        id: 1405,
        user_id: 1,
        date: '2022-06-26',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: '\n',
        created_at: '2022-06-29 22:29:27',
        updated_at: '2022-06-29 22:29:27'
      },
      {
        id: 1406,
        user_id: 1,
        date: '2022-06-27',
        customer: 'mix',
        seller: 'seller1',
        item: 9,
        payments: 0,
        remarks: '\n',
        created_at: '2022-06-29 22:29:44',
        updated_at: '2022-06-29 22:29:44'
      },
      {
        id: 1407,
        user_id: 1,
        date: '2022-06-27',
        customer: 'mix',
        seller: 'seller1',
        item: 15,
        payments: 0,
        remarks: '\n',
        created_at: '2022-06-29 22:30:03',
        updated_at: '2022-06-29 22:30:03'
      },
      {
        id: 1408,
        user_id: 1,
        date: '2022-06-28',
        customer: 'mix',
        seller: 'seller1',
        item: 3,
        payments: 0,
        remarks: '\n',
        created_at: '2022-06-29 22:30:20',
        updated_at: '2022-06-29 22:30:20'
      },
      {
        id: 1409,
        user_id: 1,
        date: '2022-06-20',
        customer: 'mix',
        seller: 'seller2',
        item: 30,
        payments: 0,
        remarks: '\n',
        created_at: '2022-06-29 22:31:53',
        updated_at: '2022-06-29 22:32:30'
      },
      {
        id: 1410,
        user_id: 1,
        date: '2022-06-22',
        customer: 'mix',
        seller: 'seller2',
        item: 16,
        payments: 0,
        remarks: '\n',
        created_at: '2022-06-29 22:32:56',
        updated_at: '2022-06-29 22:32:56'
      },
      {
        id: 1411,
        user_id: 1,
        date: '2022-06-24',
        customer: 'mix',
        seller: 'seller2',
        item: 16,
        payments: 0,
        remarks: '\n',
        created_at: '2022-06-29 22:33:08',
        updated_at: '2022-06-29 22:33:08'
      },
      {
        id: 1412,
        user_id: 1,
        date: '2022-06-26',
        customer: 'mix',
        seller: 'seller2',
        item: 12,
        payments: 0,
        remarks: '\n',
        created_at: '2022-06-29 22:33:37',
        updated_at: '2022-06-29 22:33:37'
      },
      {
        id: 1414,
        user_id: 1,
        date: '2022-06-30',
        customer: 'mix',
        seller: 'seller2',
        item: 8,
        payments: 0,
        remarks: null,
        created_at: '2022-07-08 07:50:21',
        updated_at: '2022-07-08 07:50:21'
      },
      {
        id: 1415,
        user_id: 1,
        date: '2022-06-30',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: 0,
        remarks: '4 bautismo\n1 caagbay\n1 barracks',
        created_at: '2022-07-08 07:51:29',
        updated_at: '2022-07-08 07:51:29'
      },
      {
        id: 1416,
        user_id: 1,
        date: '2022-07-04',
        customer: 'mix',
        seller: 'station',
        item: 6,
        payments: 6,
        remarks: null,
        created_at: '2022-07-08 09:25:32',
        updated_at: '2022-07-08 09:25:32'
      },
      {
        id: 1417,
        user_id: 1,
        date: '2022-07-04',
        customer: 'B.Gerry Canillas',
        seller: 'station',
        item: 14,
        payments: 14,
        remarks: null,
        created_at: '2022-07-08 09:26:09',
        updated_at: '2022-07-08 09:26:09'
      },
      {
        id: 1418,
        user_id: 1,
        date: '2022-07-02',
        customer: 'mix',
        seller: 'seller1',
        item: 11,
        payments: 0,
        remarks: null,
        created_at: '2022-07-08 09:27:01',
        updated_at: '2022-07-15 09:11:50'
      },
      {
        id: 1419,
        user_id: 1,
        date: '2022-07-04',
        customer: 'mix',
        seller: 'seller1',
        item: 17,
        payments: 0,
        remarks: null,
        created_at: '2022-07-08 09:28:11',
        updated_at: '2022-07-15 09:11:28'
      },
      {
        id: 1420,
        user_id: 1,
        date: '2022-07-05',
        customer: 'mix',
        seller: 'seller1',
        item: 8,
        payments: 0,
        remarks: null,
        created_at: '2022-07-08 09:28:33',
        updated_at: '2022-07-08 09:32:24'
      },
      {
        id: 1421,
        user_id: 1,
        date: '2022-07-06',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: 0,
        remarks: '200 bottles dupay',
        created_at: '2022-07-08 09:29:06',
        updated_at: '2022-07-08 09:31:51'
      },
      {
        id: 1422,
        user_id: 1,
        date: '2022-07-07',
        customer: 'mix',
        seller: 'seller1',
        item: 6,
        payments: 0,
        remarks: '1 addpro',
        created_at: '2022-07-08 09:29:28',
        updated_at: '2022-07-08 09:31:39'
      },
      {
        id: 1423,
        user_id: 1,
        date: '2022-07-02',
        customer: 'mix',
        seller: 'seller2',
        item: 11,
        payments: 0,
        remarks: '4 standby',
        created_at: '2022-07-08 09:30:02',
        updated_at: '2022-07-15 09:19:04'
      },
      {
        id: 1424,
        user_id: 1,
        date: '2022-07-04',
        customer: 'mix',
        seller: 'seller2',
        item: 18,
        payments: 0,
        remarks: null,
        created_at: '2022-07-08 09:30:19',
        updated_at: '2022-07-08 09:30:19'
      },
      {
        id: 1425,
        user_id: 1,
        date: '2022-07-06',
        customer: 'mix',
        seller: 'seller2',
        item: 20,
        payments: 0,
        remarks: null,
        created_at: '2022-07-08 09:30:40',
        updated_at: '2022-07-08 09:30:40'
      },
      {
        id: 1426,
        user_id: 1,
        date: '2022-07-08',
        customer: 'mix',
        seller: 'seller2',
        item: 12,
        payments: 0,
        remarks: null,
        created_at: '2022-07-08 09:30:55',
        updated_at: '2022-07-08 09:30:55'
      },
      {
        id: 1427,
        user_id: 1,
        date: '2022-07-14',
        customer: 'Lucban',
        seller: 'station',
        item: 0,
        payments: 0,
        remarks: 'basyo 16 lapad, 20bilog, 36remit c/o b.edil',
        created_at: '2022-07-15 09:13:41',
        updated_at: '2022-07-17 11:01:03'
      },
      {
        id: 1428,
        user_id: 1,
        date: '2022-07-09',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2022-07-15 09:17:31',
        updated_at: '2022-07-15 09:17:31'
      },
      {
        id: 1429,
        user_id: 1,
        date: '2022-07-10',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2022-07-15 09:17:40',
        updated_at: '2022-07-15 09:17:40'
      },
      {
        id: 1430,
        user_id: 1,
        date: '2022-07-11',
        customer: 'mix',
        seller: 'seller1',
        item: 8,
        payments: 0,
        remarks: null,
        created_at: '2022-07-15 09:17:59',
        updated_at: '2022-07-15 09:17:59'
      },
      {
        id: 1431,
        user_id: 1,
        date: '2022-07-12',
        customer: 'mix',
        seller: 'seller1',
        item: 15,
        payments: 0,
        remarks: null,
        created_at: '2022-07-15 09:18:26',
        updated_at: '2022-07-15 09:18:26'
      },
      {
        id: 1432,
        user_id: 1,
        date: '2022-07-09',
        customer: 'mix',
        seller: 'seller2',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2022-07-15 09:20:46',
        updated_at: '2022-07-15 09:20:46'
      },
      {
        id: 1433,
        user_id: 1,
        date: '2022-07-11',
        customer: 'mix',
        seller: 'seller2',
        item: 14,
        payments: 0,
        remarks: null,
        created_at: '2022-07-15 09:21:04',
        updated_at: '2022-07-15 09:21:04'
      },
      {
        id: 1434,
        user_id: 1,
        date: '2022-07-12',
        customer: 'mix',
        seller: 'seller2',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2022-07-15 09:21:19',
        updated_at: '2022-07-15 09:21:19'
      },
      {
        id: 1435,
        user_id: 1,
        date: '2022-07-15',
        customer: 'mix',
        seller: 'seller2',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2022-07-15 09:21:31',
        updated_at: '2022-07-15 09:21:31'
      },
      {
        id: 1487,
        user_id: 1,
        date: '2022-08-29',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2022-09-02 12:05:11',
        updated_at: '2022-09-02 12:05:11'
      },
      {
        id: 1489,
        user_id: 1,
        date: '2022-09-01',
        customer: 'Bro Gerry',
        seller: 'station',
        item: 15,
        payments: 15,
        remarks: null,
        created_at: '2022-09-02 12:06:28',
        updated_at: '2022-10-31 17:35:12'
      },
      {
        id: 1490,
        user_id: 1,
        date: '2022-09-02',
        customer: 'Bro Raul',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2022-09-02 12:06:53',
        updated_at: '2022-10-31 17:35:24'
      },
      {
        id: 1491,
        user_id: 1,
        date: '2022-08-26',
        customer: 'mix',
        seller: 'seller1',
        item: 8,
        payments: 8,
        remarks: null,
        created_at: '2022-09-02 12:11:02',
        updated_at: '2022-10-28 21:16:56'
      },
      {
        id: 1492,
        user_id: 1,
        date: '2022-08-28',
        customer: 'mix',
        seller: 'seller1',
        item: 12,
        payments: 12,
        remarks: null,
        created_at: '2022-09-02 12:11:29',
        updated_at: '2022-09-02 12:11:29'
      },
      {
        id: 1493,
        user_id: 1,
        date: '2022-08-30',
        customer: 'mix',
        seller: 'seller1',
        item: 8,
        payments: 8,
        remarks: null,
        created_at: '2022-09-02 12:12:03',
        updated_at: '2022-09-02 12:12:03'
      },
      {
        id: 1494,
        user_id: 1,
        date: '2022-08-31',
        customer: 'mix',
        seller: 'seller1',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2022-09-02 12:12:19',
        updated_at: '2022-10-28 21:15:42'
      },
      {
        id: 1495,
        user_id: 1,
        date: '2022-09-01',
        customer: 'mix',
        seller: 'seller1',
        item: 21,
        payments: 21,
        remarks: null,
        created_at: '2022-09-02 12:14:47',
        updated_at: '2022-09-06 21:41:32'
      },
      {
        id: 1496,
        user_id: 1,
        date: '2022-08-28',
        customer: 'mix',
        seller: 'seller2',
        item: 26,
        payments: 26,
        remarks: null,
        created_at: '2022-09-02 12:16:29',
        updated_at: '2022-09-02 12:16:29'
      },
      {
        id: 1497,
        user_id: 1,
        date: '2022-08-29',
        customer: 'mix',
        seller: 'seller2',
        item: 5,
        payments: 5,
        remarks: null,
        created_at: '2022-09-02 12:16:50',
        updated_at: '2022-09-02 12:16:50'
      },
      {
        id: 1498,
        user_id: 1,
        date: '2022-08-30',
        customer: 'mix',
        seller: 'seller2',
        item: 8,
        payments: 8,
        remarks: null,
        created_at: '2022-09-02 12:17:12',
        updated_at: '2022-09-02 12:17:12'
      },
      {
        id: 1499,
        user_id: 1,
        date: '2022-08-31',
        customer: 'mix',
        seller: 'seller2',
        item: 12,
        payments: 12,
        remarks: null,
        created_at: '2022-09-02 12:17:30',
        updated_at: '2022-09-02 12:17:30'
      },
      {
        id: 1500,
        user_id: 1,
        date: '2022-09-02',
        customer: 'mix',
        seller: 'seller2',
        item: 16,
        payments: 16,
        remarks: null,
        created_at: '2022-09-02 12:18:08',
        updated_at: '2022-09-02 12:18:08'
      },
      {
        id: 1501,
        user_id: 1,
        date: '2022-09-03',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2022-09-05 04:02:46',
        updated_at: '2022-09-09 21:09:53'
      },
      {
        id: 1502,
        user_id: 1,
        date: '2022-09-03',
        customer: 'mix',
        seller: 'seller2',
        item: 20,
        payments: 20,
        remarks: null,
        created_at: '2022-09-05 04:03:31',
        updated_at: '2022-09-05 04:03:31'
      },
      {
        id: 1503,
        user_id: 1,
        date: '2022-09-04',
        customer: 'mix',
        seller: 'seller2',
        item: 7,
        payments: 7,
        remarks: null,
        created_at: '2022-09-05 04:04:20',
        updated_at: '2022-09-05 04:19:48'
      },
      {
        id: 1504,
        user_id: 1,
        date: '2022-09-05',
        customer: 'mix',
        seller: 'seller2',
        item: 14,
        payments: 14,
        remarks: null,
        created_at: '2022-09-05 04:04:56',
        updated_at: '2022-09-05 04:04:56'
      },
      {
        id: 1505,
        user_id: 1,
        date: '2022-09-07',
        customer: 'mix',
        seller: 'seller2',
        item: 40,
        payments: 40,
        remarks: null,
        created_at: '2022-09-07 10:42:39',
        updated_at: '2022-09-07 10:42:39'
      },
      {
        id: 1506,
        user_id: 1,
        date: '2022-09-08',
        customer: 'mix',
        seller: 'seller1',
        item: 7,
        payments: 7,
        remarks: null,
        created_at: '2022-09-13 22:18:54',
        updated_at: '2022-09-13 22:18:54'
      },
      {
        id: 1507,
        user_id: 1,
        date: '2022-09-09',
        customer: 'mix',
        seller: 'seller1',
        item: 7,
        payments: 7,
        remarks: null,
        created_at: '2022-09-13 22:19:05',
        updated_at: '2022-09-13 22:19:05'
      },
      {
        id: 1508,
        user_id: 1,
        date: '2022-09-12',
        customer: 'mix',
        seller: 'seller1',
        item: 9,
        payments: 9,
        remarks: null,
        created_at: '2022-09-13 22:19:22',
        updated_at: '2022-09-13 22:19:22'
      },
      {
        id: 1509,
        user_id: 1,
        date: '2022-09-13',
        customer: 'mix',
        seller: 'seller2',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2022-09-14 09:34:11',
        updated_at: '2022-09-14 09:34:11'
      },
      {
        id: 1510,
        user_id: 1,
        date: '2022-09-14',
        customer: 'mix',
        seller: 'seller2',
        item: 18,
        payments: 18,
        remarks: null,
        created_at: '2022-09-14 09:34:26',
        updated_at: '2022-09-14 09:34:52'
      },
      {
        id: 1511,
        user_id: 1,
        date: '2022-09-03',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2022-09-16 11:19:29',
        updated_at: '2022-09-16 11:19:29'
      },
      {
        id: 1512,
        user_id: 1,
        date: '2022-09-07',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2022-09-16 11:19:39',
        updated_at: '2022-09-16 11:19:39'
      },
      {
        id: 1513,
        user_id: 1,
        date: '2022-09-14',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2022-09-16 11:19:52',
        updated_at: '2022-09-16 11:19:52'
      },
      {
        id: 1514,
        user_id: 1,
        date: '2022-09-16',
        customer: 'mix',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2022-09-16 11:20:14',
        updated_at: '2022-09-16 11:20:14'
      },
      {
        id: 1515,
        user_id: 1,
        date: '2022-09-15',
        customer: 'mix',
        seller: 'seller2',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2022-09-16 11:21:14',
        updated_at: '2022-09-16 11:21:14'
      },
      {
        id: 1516,
        user_id: 1,
        date: '2022-09-16',
        customer: 'mix',
        seller: 'seller2',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2022-09-16 11:21:30',
        updated_at: '2022-09-16 11:21:30'
      },
      {
        id: 1517,
        user_id: 1,
        date: '2022-09-18',
        customer: 'Bro Gerry',
        seller: 'station',
        item: 18,
        payments: 18,
        remarks: null,
        created_at: '2022-09-19 12:40:03',
        updated_at: '2022-10-31 17:35:01'
      },
      {
        id: 1518,
        user_id: 1,
        date: '2022-09-19',
        customer: 'mix',
        seller: 'seller2',
        item: 25,
        payments: 25,
        remarks: null,
        created_at: '2022-09-19 12:41:19',
        updated_at: '2022-09-19 12:41:19'
      },
      {
        id: 1519,
        user_id: 1,
        date: '2022-09-14',
        customer: 'mix',
        seller: 'seller1',
        item: 19,
        payments: 19,
        remarks: null,
        created_at: '2022-09-19 12:42:46',
        updated_at: '2022-09-19 12:42:46'
      },
      {
        id: 1520,
        user_id: 1,
        date: '2022-09-16',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2022-09-19 12:43:08',
        updated_at: '2022-09-19 12:43:08'
      },
      {
        id: 1521,
        user_id: 1,
        date: '2022-09-20',
        customer: 'mix',
        seller: 'seller2',
        item: 9,
        payments: 9,
        remarks: null,
        created_at: '2022-09-22 13:17:46',
        updated_at: '2022-09-22 13:17:46'
      },
      {
        id: 1522,
        user_id: 1,
        date: '2022-09-22',
        customer: 'mix',
        seller: 'seller2',
        item: 11,
        payments: 11,
        remarks: null,
        created_at: '2022-09-22 13:18:22',
        updated_at: '2022-09-22 13:18:22'
      },
      {
        id: 1523,
        user_id: 1,
        date: '2022-09-24',
        customer: 'mix',
        seller: 'seller2',
        item: 7,
        payments: 7,
        remarks: null,
        created_at: '2022-09-28 04:29:42',
        updated_at: '2022-09-28 04:29:42'
      },
      {
        id: 1524,
        user_id: 1,
        date: '2022-09-25',
        customer: 'mix',
        seller: 'seller2',
        item: 16,
        payments: 16,
        remarks: null,
        created_at: '2022-09-28 04:30:13',
        updated_at: '2022-09-28 04:30:13'
      },
      {
        id: 1525,
        user_id: 1,
        date: '2022-09-26',
        customer: 'mix',
        seller: 'seller2',
        item: 18,
        payments: 18,
        remarks: null,
        created_at: '2022-09-28 04:30:34',
        updated_at: '2022-09-28 04:30:34'
      },
      {
        id: 1526,
        user_id: 1,
        date: '2022-09-25',
        customer: 'mix',
        seller: 'station',
        item: 3,
        payments: 3,
        remarks: null,
        created_at: '2022-09-28 04:31:10',
        updated_at: '2022-09-28 04:32:02'
      },
      {
        id: 1527,
        user_id: 1,
        date: '2022-09-18',
        customer: 'mix',
        seller: 'seller1',
        item: 19,
        payments: 19,
        remarks: null,
        created_at: '2022-10-01 11:27:46',
        updated_at: '2022-10-06 10:10:57'
      },
      {
        id: 1528,
        user_id: 1,
        date: '2022-09-20',
        customer: 'mix',
        seller: 'seller1',
        item: 9,
        payments: 9,
        remarks: null,
        created_at: '2022-10-01 11:28:21',
        updated_at: '2022-10-06 10:11:09'
      },
      {
        id: 1529,
        user_id: 1,
        date: '2022-09-22',
        customer: 'mix',
        seller: 'seller1',
        item: 8,
        payments: 8,
        remarks: null,
        created_at: '2022-10-01 11:28:53',
        updated_at: '2022-10-06 10:11:18'
      },
      {
        id: 1530,
        user_id: 1,
        date: '2022-09-24',
        customer: 'mix',
        seller: 'seller1',
        item: 13,
        payments: 13,
        remarks: null,
        created_at: '2022-10-01 11:29:18',
        updated_at: '2022-10-06 10:11:32'
      },
      {
        id: 1531,
        user_id: 1,
        date: '2022-09-26',
        customer: 'mix',
        seller: 'seller1',
        item: 12,
        payments: 12,
        remarks: null,
        created_at: '2022-10-01 11:29:34',
        updated_at: '2022-10-06 10:11:52'
      },
      {
        id: 1532,
        user_id: 1,
        date: '2022-09-28',
        customer: 'mix',
        seller: 'seller1',
        item: 12,
        payments: 0,
        remarks: null,
        created_at: '2022-10-01 11:29:57',
        updated_at: '2022-10-01 11:31:00'
      },
      {
        id: 1533,
        user_id: 1,
        date: '2022-09-29',
        customer: 'mix',
        seller: 'seller1',
        item: 9,
        payments: 0,
        remarks: null,
        created_at: '2022-10-01 11:30:25',
        updated_at: '2022-10-01 11:30:25'
      },
      {
        id: 1534,
        user_id: 1,
        date: '2022-10-01',
        customer: 'mix',
        seller: 'seller1',
        item: 3,
        payments: 3,
        remarks: null,
        created_at: '2022-10-01 11:31:48',
        updated_at: '2022-10-06 10:12:29'
      },
      {
        id: 1535,
        user_id: 1,
        date: '2022-09-28',
        customer: 'mix',
        seller: 'seller2',
        item: 13,
        payments: 13,
        remarks: null,
        created_at: '2022-10-01 11:53:43',
        updated_at: '2022-10-01 11:53:43'
      },
      {
        id: 1537,
        user_id: 1,
        date: '2022-09-30',
        customer: 'mix',
        seller: 'seller2',
        item: 11,
        payments: 11,
        remarks: null,
        created_at: '2022-10-01 11:54:59',
        updated_at: '2022-10-01 11:54:59'
      },
      {
        id: 1538,
        user_id: 1,
        date: '2022-10-01',
        customer: 'mix',
        seller: 'seller2',
        item: 8,
        payments: 8,
        remarks: null,
        created_at: '2022-10-01 11:55:33',
        updated_at: '2022-10-04 09:52:50'
      },
      {
        id: 1539,
        user_id: 1,
        date: '2022-10-01',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2022-10-01 11:55:53',
        updated_at: '2022-10-01 11:55:53'
      },
      {
        id: 1540,
        user_id: 1,
        date: '2022-10-03',
        customer: 'Bro Gerry Canillas',
        seller: 'station',
        item: 27,
        payments: 27,
        remarks: null,
        created_at: '2022-10-04 09:49:44',
        updated_at: '2022-11-07 20:46:58'
      },
      {
        id: 1541,
        user_id: 1,
        date: '2022-10-02',
        customer: 'mix',
        seller: 'seller2',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2022-10-04 09:54:04',
        updated_at: '2022-10-04 09:54:04'
      },
      {
        id: 1542,
        user_id: 1,
        date: '2022-10-03',
        customer: 'mix',
        seller: 'seller2',
        item: 13,
        payments: 13,
        remarks: null,
        created_at: '2022-10-04 09:54:36',
        updated_at: '2022-10-04 09:56:45'
      },
      {
        id: 1543,
        user_id: 1,
        date: '2022-10-04',
        customer: 'mix',
        seller: 'seller2',
        item: 12,
        payments: 12,
        remarks: null,
        created_at: '2022-10-04 09:56:07',
        updated_at: '2022-10-04 09:56:07'
      },
      {
        id: 1544,
        user_id: 1,
        date: '2022-10-02',
        customer: 'mix',
        seller: 'seller1',
        item: 7,
        payments: 0,
        remarks: null,
        created_at: '2022-10-06 10:13:31',
        updated_at: '2022-10-06 10:13:31'
      },
      {
        id: 1545,
        user_id: 1,
        date: '2022-10-04',
        customer: 'mix',
        seller: 'seller1',
        item: 23,
        payments: 0,
        remarks: null,
        created_at: '2022-10-06 10:13:53',
        updated_at: '2022-10-06 10:13:53'
      },
      {
        id: 1546,
        user_id: 1,
        date: '2022-10-05',
        customer: 'mix',
        seller: 'seller1',
        item: 7,
        payments: 0,
        remarks: null,
        created_at: '2022-10-06 10:14:19',
        updated_at: '2022-10-06 10:14:19'
      },
      {
        id: 1547,
        user_id: 1,
        date: '2022-10-06',
        customer: 'mix',
        seller: 'seller1',
        item: 8,
        payments: 0,
        remarks: null,
        created_at: '2022-10-06 10:14:36',
        updated_at: '2022-10-06 10:14:36'
      },
      {
        id: 1548,
        user_id: 1,
        date: '2022-10-11',
        customer: 'Bro Gerry Canillas',
        seller: 'station',
        item: 24,
        payments: 24,
        remarks: null,
        created_at: '2022-10-11 10:17:42',
        updated_at: '2022-10-31 17:34:28'
      },
      {
        id: 1550,
        user_id: 1,
        date: '2022-10-08',
        customer: 'mix',
        seller: 'station',
        item: 3,
        payments: 3,
        remarks: null,
        created_at: '2022-10-11 10:18:39',
        updated_at: '2022-10-11 10:18:39'
      },
      {
        id: 1551,
        user_id: 1,
        date: '2022-10-07',
        customer: 'mix',
        seller: 'seller1',
        item: 5,
        payments: 0,
        remarks: null,
        created_at: '2022-10-11 10:19:25',
        updated_at: '2022-10-11 10:20:47'
      },
      {
        id: 1552,
        user_id: 1,
        date: '2022-10-08',
        customer: 'mix',
        seller: 'seller1',
        item: 8,
        payments: 0,
        remarks: null,
        created_at: '2022-10-11 10:19:44',
        updated_at: '2022-10-11 10:20:56'
      },
      {
        id: 1553,
        user_id: 1,
        date: '2022-10-10',
        customer: 'mix',
        seller: 'seller1',
        item: 15,
        payments: 0,
        remarks: null,
        created_at: '2022-10-11 10:20:21',
        updated_at: '2022-10-11 10:21:04'
      },
      {
        id: 1554,
        user_id: 1,
        date: '2022-10-06',
        customer: 'mix',
        seller: 'seller2',
        item: 15,
        payments: 15,
        remarks: null,
        created_at: '2022-10-11 10:22:42',
        updated_at: '2022-10-11 10:22:42'
      },
      {
        id: 1555,
        user_id: 1,
        date: '2022-10-09',
        customer: 'mix',
        seller: 'seller2',
        item: 7,
        payments: 7,
        remarks: null,
        created_at: '2022-10-11 10:23:04',
        updated_at: '2022-10-11 10:23:04'
      },
      {
        id: 1556,
        user_id: 1,
        date: '2022-10-11',
        customer: 'mix',
        seller: 'seller2',
        item: 6,
        payments: 6,
        remarks: null,
        created_at: '2022-10-11 10:23:26',
        updated_at: '2022-10-11 10:23:26'
      },
      {
        id: 1557,
        user_id: 1,
        date: '2022-10-12',
        customer: 'mix',
        seller: 'seller1',
        item: 12,
        payments: 0,
        remarks: null,
        created_at: '2022-10-15 19:16:41',
        updated_at: '2022-10-15 19:16:41'
      },
      {
        id: 1558,
        user_id: 1,
        date: '2022-10-13',
        customer: 'mix',
        seller: 'seller1',
        item: 3,
        payments: 0,
        remarks: null,
        created_at: '2022-10-15 19:17:10',
        updated_at: '2022-10-15 19:17:10'
      },
      {
        id: 1559,
        user_id: 1,
        date: '2022-10-13',
        customer: 'mix',
        seller: 'seller2',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2022-10-15 19:18:00',
        updated_at: '2022-10-15 19:18:00'
      },
      {
        id: 1560,
        user_id: 1,
        date: '2022-10-14',
        customer: 'mix',
        seller: 'seller2',
        item: 13,
        payments: 13,
        remarks: null,
        created_at: '2022-10-15 19:18:43',
        updated_at: '2022-10-15 19:18:43'
      },
      {
        id: 1561,
        user_id: 1,
        date: '2022-10-15',
        customer: 'mix',
        seller: 'seller2',
        item: 18,
        payments: 18,
        remarks: null,
        created_at: '2022-10-15 19:19:23',
        updated_at: '2022-10-15 19:19:23'
      },
      {
        id: 1562,
        user_id: 1,
        date: '2022-10-07',
        customer: 'mix',
        seller: 'station',
        item: 3,
        payments: 3,
        remarks: null,
        created_at: '2022-10-15 19:20:22',
        updated_at: '2022-10-15 19:20:22'
      },
      {
        id: 1563,
        user_id: 1,
        date: '2022-10-13',
        customer: 'mix',
        seller: 'station',
        item: 3,
        payments: 3,
        remarks: null,
        created_at: '2022-10-15 19:21:58',
        updated_at: '2022-10-15 19:21:58'
      },
      {
        id: 1564,
        user_id: 1,
        date: '2022-10-14',
        customer: 'mix',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2022-10-15 19:22:39',
        updated_at: '2022-10-15 19:22:39'
      },
      {
        id: 1565,
        user_id: 1,
        date: '2022-10-15',
        customer: 'mix',
        seller: 'station',
        item: 6,
        payments: 6,
        remarks: null,
        created_at: '2022-10-15 19:23:02',
        updated_at: '2022-10-15 19:23:02'
      },
      {
        id: 1566,
        user_id: 1,
        date: '2022-08-25',
        customer: 'mix',
        seller: 'seller1',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2022-10-15 20:09:56',
        updated_at: '2022-10-15 20:09:56'
      },
      {
        id: 1567,
        user_id: 1,
        date: '2022-10-18',
        customer: 'mix',
        seller: 'station',
        item: 9,
        payments: 9,
        remarks: null,
        created_at: '2022-10-18 14:16:51',
        updated_at: '2022-10-18 14:19:21'
      },
      {
        id: 1570,
        user_id: 1,
        date: '2022-10-20',
        customer: 'Sis Lorna ',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2022-10-20 10:37:28',
        updated_at: '2022-11-07 20:58:34'
      },
      {
        id: 1571,
        user_id: 1,
        date: '2022-10-20',
        customer: 'Sis Angie ',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2022-10-20 10:37:57',
        updated_at: '2022-11-07 20:57:30'
      },
      {
        id: 1573,
        user_id: 1,
        date: '2022-10-22',
        customer: 'Bro Gerry ',
        seller: 'station',
        item: 29,
        payments: 29,
        remarks: null,
        created_at: '2022-10-22 05:28:28',
        updated_at: '2022-11-07 20:58:03'
      },
      {
        id: 1574,
        user_id: 1,
        date: '2022-10-16',
        customer: 'mix',
        seller: 'seller2',
        item: 13,
        payments: 13,
        remarks: null,
        created_at: '2022-10-22 05:31:33',
        updated_at: '2022-10-22 05:31:33'
      },
      {
        id: 1576,
        user_id: 1,
        date: '2022-10-20',
        customer: 'mix',
        seller: 'seller2',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2022-10-22 05:32:15',
        updated_at: '2022-10-22 05:32:15'
      },
      {
        id: 1578,
        user_id: 1,
        date: '2022-10-23',
        customer: 'mix',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2022-10-23 06:18:38',
        updated_at: '2022-10-23 06:18:38'
      },
      {
        id: 1580,
        user_id: 1,
        date: '2022-10-26',
        customer: 'Sis Rosalie',
        seller: 'station',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2022-10-27 03:52:33',
        updated_at: '2022-11-07 20:59:07'
      },
      {
        id: 1581,
        user_id: 1,
        date: '2022-10-27',
        customer: 'Sis Lorna',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: 'basyo 4',
        created_at: '2022-10-27 11:01:52',
        updated_at: '2022-11-07 21:01:03'
      },
      {
        id: 1582,
        user_id: 1,
        date: '2022-10-28',
        customer: 'mix',
        seller: 'seller2',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2022-10-28 01:20:24',
        updated_at: '2022-10-28 01:22:27'
      },
      {
        id: 1583,
        user_id: 1,
        date: '2022-10-21',
        customer: 'mix',
        seller: 'seller2',
        item: 15,
        payments: 15,
        remarks: null,
        created_at: '2022-10-28 01:24:47',
        updated_at: '2022-10-28 01:24:47'
      },
      {
        id: 1584,
        user_id: 1,
        date: '2022-10-23',
        customer: 'mix',
        seller: 'seller2',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2022-10-28 01:25:35',
        updated_at: '2022-10-28 01:25:35'
      },
      {
        id: 1585,
        user_id: 1,
        date: '2022-10-26',
        customer: 'mix',
        seller: 'seller2',
        item: 16,
        payments: 16,
        remarks: null,
        created_at: '2022-10-28 01:26:41',
        updated_at: '2022-10-28 01:26:41'
      },
      {
        id: 1586,
        user_id: 1,
        date: '2022-10-21',
        customer: 'Sis Rosalie',
        seller: 'station',
        item: 15,
        payments: 15,
        remarks: null,
        created_at: '2022-10-28 01:39:59',
        updated_at: '2022-11-07 20:58:22'
      },
      {
        id: 1587,
        user_id: 1,
        date: '2022-10-28',
        customer: 'Linda Cotta',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: 'basyo 2',
        created_at: '2022-10-28 05:56:26',
        updated_at: '2022-10-28 07:52:57'
      },
      {
        id: 1588,
        user_id: 1,
        date: '2022-10-27',
        customer: 'mix',
        seller: 'seller2',
        item: 14,
        payments: 14,
        remarks: null,
        created_at: '2022-10-28 09:26:23',
        updated_at: '2022-10-28 09:26:23'
      },
      {
        id: 1589,
        user_id: 1,
        date: '2022-10-24',
        customer: 'Bro Sam Biler',
        seller: 'station',
        item: 6,
        payments: 6,
        remarks: null,
        created_at: '2022-10-28 20:32:03',
        updated_at: '2022-11-02 17:34:46'
      },
      {
        id: 1590,
        user_id: 1,
        date: '2022-10-29',
        customer: 'Sis Jen Lasigas',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2022-10-29 14:56:58',
        updated_at: '2022-10-31 17:32:07'
      },
      {
        id: 1591,
        user_id: 1,
        date: '2022-10-29',
        customer: 'Bro Sam Biler',
        seller: 'station',
        item: 6,
        payments: 6,
        remarks: null,
        created_at: '2022-10-29 14:57:28',
        updated_at: '2022-10-29 14:57:28'
      },
      {
        id: 1592,
        user_id: 1,
        date: '2022-10-29',
        customer: 'walk in ',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2022-10-30 17:27:45',
        updated_at: '2022-11-14 19:01:25'
      },
      {
        id: 1593,
        user_id: 1,
        date: '2022-10-29',
        customer: 'Bro Raul',
        seller: 'station',
        item: 3,
        payments: 3,
        remarks: null,
        created_at: '2022-10-30 17:28:09',
        updated_at: '2022-10-30 17:28:09'
      },
      {
        id: 1594,
        user_id: 1,
        date: '2022-10-30',
        customer: 'kasal sariaya',
        seller: 'station',
        item: 5,
        payments: 5,
        remarks: null,
        created_at: '2022-10-30 17:28:37',
        updated_at: '2022-10-30 17:28:37'
      },
      {
        id: 1595,
        user_id: 1,
        date: '2022-10-30',
        customer: 'Sis Angie',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2022-10-30 17:29:01',
        updated_at: '2022-10-31 17:31:54'
      },
      {
        id: 1596,
        user_id: 1,
        date: '2022-10-30',
        customer: 'walk in',
        seller: 'station',
        item: 3,
        payments: 3,
        remarks: null,
        created_at: '2022-10-30 17:29:19',
        updated_at: '2022-11-15 09:15:14'
      },
      {
        id: 1597,
        user_id: 1,
        date: '2022-10-18',
        customer: 'mix',
        seller: 'seller2',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2022-10-30 17:33:24',
        updated_at: '2022-10-30 17:33:24'
      },
      {
        id: 1598,
        user_id: 1,
        date: '2022-10-31',
        customer: 'Bro Sam',
        seller: 'station',
        item: 8,
        payments: 8,
        remarks: null,
        created_at: '2022-10-31 04:40:36',
        updated_at: '2022-10-31 04:40:36'
      },
      {
        id: 1600,
        user_id: 1,
        date: '2022-10-31',
        customer: 'Bro Jose Cotta',
        seller: 'station',
        item: 6,
        payments: 6,
        remarks: null,
        created_at: '2022-10-31 17:30:08',
        updated_at: '2022-11-06 20:09:54'
      },
      {
        id: 1602,
        user_id: 1,
        date: '2022-11-01',
        customer: 'mix',
        seller: 'seller2',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2022-11-01 04:58:26',
        updated_at: '2022-11-01 04:59:12'
      },
      {
        id: 1603,
        user_id: 1,
        date: '2022-11-01',
        customer: 'Bro Edil',
        seller: 'station',
        item: 17,
        payments: 17,
        remarks: null,
        created_at: '2022-11-01 04:59:34',
        updated_at: '2022-11-07 21:05:45'
      },
      {
        id: 1604,
        user_id: 1,
        date: '2022-10-30',
        customer: 'mix',
        seller: 'seller2',
        item: 5,
        payments: 5,
        remarks: null,
        created_at: '2022-11-01 05:02:44',
        updated_at: '2022-11-01 05:02:44'
      },
      {
        id: 1605,
        user_id: 1,
        date: '2022-10-31',
        customer: 'mix',
        seller: 'seller2',
        item: 5,
        payments: 5,
        remarks: null,
        created_at: '2022-11-01 05:02:55',
        updated_at: '2022-11-01 05:02:55'
      },
      {
        id: 1606,
        user_id: 1,
        date: '2022-10-31',
        customer: 'Sis Rosalie',
        seller: 'station',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2022-11-02 17:11:27',
        updated_at: '2022-11-02 17:11:27'
      },
      {
        id: 1607,
        user_id: 1,
        date: '2022-11-02',
        customer: 'Sis Rosalie',
        seller: 'station',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2022-11-02 17:11:40',
        updated_at: '2022-11-02 17:11:40'
      },
      {
        id: 1608,
        user_id: 1,
        date: '2022-11-03',
        customer: 'Bro Gerry',
        seller: 'station',
        item: 27,
        payments: 27,
        remarks: null,
        created_at: '2022-11-03 17:17:15',
        updated_at: '2022-11-03 17:17:15'
      },
      {
        id: 1609,
        user_id: 1,
        date: '2022-11-04',
        customer: 'Sis MG Cabiltes',
        seller: 'station',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2022-11-04 10:42:54',
        updated_at: '2022-11-07 21:03:30'
      },
      {
        id: 1610,
        user_id: 1,
        date: '2022-11-04',
        customer: 'Linda Cotta',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2022-11-04 10:44:04',
        updated_at: '2022-11-04 10:44:04'
      },
      {
        id: 1611,
        user_id: 1,
        date: '2022-11-06',
        customer: 'Bro Jose Cotta',
        seller: 'station',
        item: 5,
        payments: 5,
        remarks: null,
        created_at: '2022-11-06 20:08:19',
        updated_at: '2022-11-06 20:08:19'
      },
      {
        id: 1612,
        user_id: 1,
        date: '2022-11-01',
        customer: 'Josie Cotta',
        seller: 'station',
        item: 5,
        payments: 5,
        remarks: null,
        created_at: '2022-11-06 20:11:33',
        updated_at: '2022-11-06 20:11:33'
      },
      {
        id: 1613,
        user_id: 1,
        date: '2022-11-06',
        customer: 'Josie Cotta',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2022-11-06 20:12:53',
        updated_at: '2022-11-06 20:12:53'
      },
      {
        id: 1615,
        user_id: 1,
        date: '2022-11-03',
        customer: 'mix',
        seller: 'seller2',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2022-11-07 20:48:33',
        updated_at: '2022-11-07 20:48:33'
      },
      {
        id: 1616,
        user_id: 1,
        date: '2022-11-04',
        customer: 'mix',
        seller: 'seller2',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2022-11-07 20:48:48',
        updated_at: '2022-11-07 20:48:48'
      },
      {
        id: 1618,
        user_id: 1,
        date: '2022-11-07',
        customer: 'Bro Jose Cotta',
        seller: 'station',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2022-11-07 20:54:54',
        updated_at: '2022-11-07 20:54:54'
      },
      {
        id: 1619,
        user_id: 1,
        date: '2022-11-07',
        customer: 'Sis MG cabiltes',
        seller: 'station',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2022-11-07 21:04:07',
        updated_at: '2022-11-07 21:04:07'
      },
      {
        id: 1620,
        user_id: 1,
        date: '2022-11-08',
        customer: 'Bro Sam',
        seller: 'station',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2022-11-08 18:56:49',
        updated_at: '2022-11-08 18:56:49'
      },
      {
        id: 1621,
        user_id: 1,
        date: '2022-11-08',
        customer: 'Sis Rosalie',
        seller: 'station',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2022-11-08 18:57:15',
        updated_at: '2022-11-08 18:57:15'
      },
      {
        id: 1622,
        user_id: 1,
        date: '2022-11-08',
        customer: 'mix',
        seller: 'seller2',
        item: 6,
        payments: 6,
        remarks: null,
        created_at: '2022-11-08 18:59:54',
        updated_at: '2022-11-08 18:59:54'
      },
      {
        id: 1623,
        user_id: 1,
        date: '2022-11-10',
        customer: 'Bro Edil',
        seller: 'station',
        item: 16,
        payments: 16,
        remarks: null,
        created_at: '2022-11-10 18:02:53',
        updated_at: '2022-11-10 18:02:53'
      },
      {
        id: 1624,
        user_id: 1,
        date: '2022-11-10',
        customer: 'Bro Sam',
        seller: 'station',
        item: 8,
        payments: 8,
        remarks: null,
        created_at: '2022-11-10 18:04:06',
        updated_at: '2022-11-10 18:04:06'
      },
      {
        id: 1625,
        user_id: 1,
        date: '2022-11-11',
        customer: 'mix',
        seller: 'seller2',
        item: 5,
        payments: 5,
        remarks: null,
        created_at: '2022-11-11 06:19:25',
        updated_at: '2022-11-11 06:19:25'
      },
      {
        id: 1626,
        user_id: 1,
        date: '2022-11-13',
        customer: 'Bro Jose Cotta',
        seller: 'station',
        item: 8,
        payments: 8,
        remarks: null,
        created_at: '2022-11-13 18:33:16',
        updated_at: '2022-11-13 18:33:16'
      },
      {
        id: 1627,
        user_id: 1,
        date: '2022-11-13',
        customer: 'Sis Angie',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2022-11-13 18:33:38',
        updated_at: '2022-11-13 18:33:38'
      },
      {
        id: 1628,
        user_id: 1,
        date: '2022-11-13',
        customer: 'Sis Rosalie',
        seller: 'station',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2022-11-13 18:34:02',
        updated_at: '2022-11-13 18:34:02'
      },
      {
        id: 1629,
        user_id: 1,
        date: '2022-11-05',
        customer: 'mix',
        seller: 'seller2',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2022-11-13 19:16:14',
        updated_at: '2022-12-09 20:39:50'
      },
      {
        id: 1631,
        user_id: 1,
        date: '2022-11-12',
        customer: 'mix',
        seller: 'seller2',
        item: 20,
        payments: 20,
        remarks: 'div pasalamat, remit 500php (20containers)',
        created_at: '2022-11-13 19:17:45',
        updated_at: '2022-12-09 20:40:51'
      },
      {
        id: 1632,
        user_id: 1,
        date: '2022-11-14',
        customer: 'Sis MG Cabiltes',
        seller: 'station',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2022-11-14 18:32:19',
        updated_at: '2022-11-14 18:32:19'
      },
      {
        id: 1634,
        user_id: 1,
        date: '2022-11-12',
        customer: 'Sis Norie',
        seller: 'station',
        item: 64,
        payments: 64,
        remarks: '250 bottles division pasalamat paid 1,600php',
        created_at: '2022-11-14 18:55:00',
        updated_at: '2022-11-21 21:55:24'
      },
      {
        id: 1635,
        user_id: 1,
        date: '2022-11-10',
        customer: 'mix',
        seller: 'seller2',
        item: 15,
        payments: 15,
        remarks: null,
        created_at: '2022-11-14 19:03:34',
        updated_at: '2022-11-14 19:03:34'
      },
      {
        id: 1636,
        user_id: 1,
        date: '2022-11-17',
        customer: 'Bro Jose',
        seller: 'station',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2022-11-17 02:11:07',
        updated_at: '2022-11-22 12:08:01'
      },
      {
        id: 1637,
        user_id: 1,
        date: '2022-11-13',
        customer: 'mix',
        seller: 'seller2',
        item: 13,
        payments: 13,
        remarks: null,
        created_at: '2022-11-18 03:37:09',
        updated_at: '2022-11-18 03:37:09'
      },
      {
        id: 1638,
        user_id: 1,
        date: '2022-11-15',
        customer: 'mix',
        seller: 'seller2',
        item: 7,
        payments: 7,
        remarks: null,
        created_at: '2022-11-18 03:37:34',
        updated_at: '2022-11-18 03:37:34'
      },
      {
        id: 1639,
        user_id: 1,
        date: '2022-11-19',
        customer: 'mix',
        seller: 'seller2',
        item: 13,
        payments: 13,
        remarks: null,
        created_at: '2022-11-19 11:03:51',
        updated_at: '2022-11-19 11:03:51'
      },
      {
        id: 1640,
        user_id: 1,
        date: '2022-11-19',
        customer: 'Bro Gerry C.',
        seller: 'station',
        item: 24,
        payments: 24,
        remarks: null,
        created_at: '2022-11-19 11:04:46',
        updated_at: '2022-11-19 11:04:46'
      },
      {
        id: 1647,
        user_id: 1,
        date: '2022-11-18',
        customer: 'mix',
        seller: 'seller2',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2022-11-22 12:16:06',
        updated_at: '2022-11-22 12:16:06'
      },
      {
        id: 1650,
        user_id: 1,
        date: '2022-11-19',
        customer: 'Sis Rosalie',
        seller: 'station',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2022-12-09 20:20:54',
        updated_at: '2022-12-09 20:20:54'
      },
      {
        id: 1651,
        user_id: 1,
        date: '2022-11-19',
        customer: 'walk in',
        seller: 'station',
        item: 1,
        payments: 1,
        remarks: null,
        created_at: '2022-12-09 20:21:15',
        updated_at: '2022-12-09 20:21:15'
      },
      {
        id: 1652,
        user_id: 1,
        date: '2022-11-20',
        customer: 'mix',
        seller: 'seller2',
        item: 5,
        payments: 5,
        remarks: null,
        created_at: '2022-12-09 20:21:59',
        updated_at: '2022-12-09 20:21:59'
      },
      {
        id: 1655,
        user_id: 1,
        date: '2022-11-21',
        customer: 'Sis Angie',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2022-12-09 20:23:28',
        updated_at: '2022-12-09 21:02:12'
      },
      {
        id: 1656,
        user_id: 1,
        date: '2022-11-21',
        customer: 'Bro Jose',
        seller: 'station',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2022-12-09 20:24:02',
        updated_at: '2022-12-09 21:02:59'
      },
      {
        id: 1657,
        user_id: 1,
        date: '2022-11-21',
        customer: 'Sis MG Cabiltes',
        seller: 'station',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2022-12-09 20:24:36',
        updated_at: '2022-12-09 21:04:13'
      },
      {
        id: 1658,
        user_id: 1,
        date: '2022-11-23',
        customer: 'mix',
        seller: 'seller2',
        item: 6,
        payments: 6,
        remarks: null,
        created_at: '2022-12-09 20:25:05',
        updated_at: '2022-12-09 20:25:05'
      },
      {
        id: 1659,
        user_id: 1,
        date: '2022-11-24',
        customer: 'Bro Gerry C.',
        seller: 'station',
        item: 28,
        payments: 28,
        remarks: null,
        created_at: '2022-12-09 20:25:46',
        updated_at: '2022-12-09 20:26:37'
      },
      {
        id: 1660,
        user_id: 1,
        date: '2022-11-24',
        customer: 'mix',
        seller: 'seller2',
        item: 5,
        payments: 5,
        remarks: null,
        created_at: '2022-12-09 20:26:22',
        updated_at: '2022-12-09 20:26:22'
      },
      {
        id: 1661,
        user_id: 1,
        date: '2022-11-25',
        customer: 'Sis Rosalie',
        seller: 'station',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2022-12-09 20:27:24',
        updated_at: '2022-12-09 20:27:24'
      },
      {
        id: 1662,
        user_id: 1,
        date: '2022-11-25',
        customer: 'walk in',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2022-12-09 20:28:02',
        updated_at: '2022-12-09 20:28:02'
      },
      {
        id: 1663,
        user_id: 1,
        date: '2022-11-26',
        customer: 'mix',
        seller: 'seller2',
        item: 8,
        payments: 8,
        remarks: null,
        created_at: '2022-12-09 20:28:34',
        updated_at: '2022-12-09 20:28:34'
      },
      {
        id: 1664,
        user_id: 1,
        date: '2022-11-26',
        customer: 'Bro Jose Cotta',
        seller: 'station',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2022-12-09 20:29:06',
        updated_at: '2022-12-09 20:29:06'
      },
      {
        id: 1665,
        user_id: 1,
        date: '2022-11-27',
        customer: 'mix',
        seller: 'seller2',
        item: 13,
        payments: 13,
        remarks: null,
        created_at: '2022-12-09 20:29:35',
        updated_at: '2022-12-09 20:29:35'
      },
      {
        id: 1666,
        user_id: 1,
        date: '2022-11-27',
        customer: 'walk in',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2022-12-09 20:30:47',
        updated_at: '2022-12-09 20:30:47'
      },
      {
        id: 1667,
        user_id: 1,
        date: '2022-11-28',
        customer: 'mix',
        seller: 'seller2',
        item: 5,
        payments: 5,
        remarks: null,
        created_at: '2022-12-09 20:32:08',
        updated_at: '2022-12-09 20:32:08'
      },
      {
        id: 1668,
        user_id: 1,
        date: '2022-11-30',
        customer: 'Bro Gerry C.',
        seller: 'station',
        item: 16,
        payments: 16,
        remarks: null,
        created_at: '2022-12-09 20:33:07',
        updated_at: '2022-12-09 20:33:07'
      },
      {
        id: 1669,
        user_id: 1,
        date: '2022-11-30',
        customer: 'Bro Jose Cotta',
        seller: 'station',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2022-12-09 20:33:33',
        updated_at: '2022-12-09 20:33:33'
      },
      {
        id: 1670,
        user_id: 1,
        date: '2022-11-30',
        customer: 'Sis MG Cabiltes',
        seller: 'station',
        item: 9,
        payments: 9,
        remarks: null,
        created_at: '2022-12-09 20:34:06',
        updated_at: '2022-12-09 20:34:06'
      },
      {
        id: 1671,
        user_id: 1,
        date: '2022-11-30',
        customer: 'Sis Rosalie',
        seller: 'station',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2022-12-09 20:34:33',
        updated_at: '2022-12-09 20:34:33'
      },
      {
        id: 1672,
        user_id: 1,
        date: '2022-11-21',
        customer: 'mix',
        seller: 'seller2',
        item: 5,
        payments: 5,
        remarks: null,
        created_at: '2022-12-09 20:50:42',
        updated_at: '2022-12-09 20:50:42'
      },
      {
        id: 1674,
        user_id: 1,
        date: '2022-11-22',
        customer: 'walk-in',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2022-12-09 21:05:30',
        updated_at: '2022-12-09 21:05:30'
      },
      {
        id: 1675,
        user_id: 1,
        date: '2022-11-25',
        customer: 'mix',
        seller: 'seller2',
        item: 5,
        payments: 5,
        remarks: null,
        created_at: '2022-12-09 21:06:25',
        updated_at: '2022-12-09 21:06:25'
      },
      {
        id: 1676,
        user_id: 1,
        date: '2022-12-01',
        customer: 'mix',
        seller: 'seller2',
        item: 9,
        payments: 9,
        remarks: null,
        created_at: '2022-12-09 23:13:32',
        updated_at: '2022-12-09 23:13:32'
      },
      {
        id: 1677,
        user_id: 1,
        date: '2022-12-02',
        customer: 'mix',
        seller: 'seller2',
        item: 4,
        payments: 0,
        remarks: null,
        created_at: '2022-12-09 23:14:30',
        updated_at: '2022-12-09 23:14:30'
      },
      {
        id: 1678,
        user_id: 1,
        date: '2022-12-03',
        customer: 'mix',
        seller: 'seller2',
        item: 17,
        payments: 10,
        remarks: null,
        created_at: '2022-12-09 23:15:07',
        updated_at: '2022-12-09 23:15:07'
      },
      {
        id: 1679,
        user_id: 1,
        date: '2022-12-05',
        customer: 'mix',
        seller: 'seller2',
        item: 15,
        payments: 9,
        remarks: null,
        created_at: '2022-12-09 23:15:40',
        updated_at: '2022-12-09 23:15:40'
      },
      {
        id: 1680,
        user_id: 1,
        date: '2022-12-06',
        customer: 'mix',
        seller: 'seller2',
        item: 7,
        payments: 5,
        remarks: null,
        created_at: '2022-12-09 23:16:09',
        updated_at: '2022-12-16 07:00:10'
      },
      {
        id: 1681,
        user_id: 1,
        date: '2022-12-08',
        customer: 'mix',
        seller: 'seller2',
        item: 14,
        payments: 10,
        remarks: null,
        created_at: '2022-12-09 23:16:37',
        updated_at: '2022-12-16 07:01:27'
      },
      {
        id: 1682,
        user_id: 1,
        date: '2022-12-09',
        customer: 'mix',
        seller: 'seller2',
        item: 10,
        payments: 0,
        remarks: null,
        created_at: '2022-12-09 23:17:01',
        updated_at: '2022-12-09 23:17:01'
      },
      {
        id: 1683,
        user_id: 1,
        date: '2022-12-01',
        customer: 'mix',
        seller: 'seller1',
        item: 20,
        payments: 20,
        remarks: null,
        created_at: '2022-12-09 23:17:49',
        updated_at: '2022-12-09 23:17:49'
      },
      {
        id: 1684,
        user_id: 1,
        date: '2022-12-08',
        customer: 'mix',
        seller: 'seller1',
        item: 14,
        payments: 14,
        remarks: null,
        created_at: '2022-12-09 23:18:18',
        updated_at: '2022-12-09 23:18:18'
      },
      {
        id: 1685,
        user_id: 1,
        date: '2022-12-08',
        customer: 'Sis MG Cabiltes',
        seller: 'station',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2022-12-09 23:20:11',
        updated_at: '2022-12-09 23:20:11'
      },
      {
        id: 1686,
        user_id: 1,
        date: '2022-12-03',
        customer: 'Bro Jose G.',
        seller: 'station',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2022-12-09 23:21:05',
        updated_at: '2022-12-09 23:21:05'
      },
      {
        id: 1687,
        user_id: 1,
        date: '2022-12-05',
        customer: 'Bro Jose G.',
        seller: 'station',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2022-12-09 23:21:15',
        updated_at: '2022-12-09 23:21:15'
      },
      {
        id: 1688,
        user_id: 1,
        date: '2022-12-08',
        customer: 'Bro Jose G.',
        seller: 'station',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2022-12-09 23:21:24',
        updated_at: '2022-12-09 23:21:24'
      },
      {
        id: 1689,
        user_id: 1,
        date: '2022-12-07',
        customer: 'Sis Angie A.',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2022-12-09 23:22:29',
        updated_at: '2022-12-09 23:22:29'
      },
      {
        id: 1690,
        user_id: 1,
        date: '2022-12-06',
        customer: 'Sis Rosalie ',
        seller: 'station',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2022-12-09 23:23:21',
        updated_at: '2022-12-09 23:23:21'
      },
      {
        id: 1691,
        user_id: 1,
        date: '2022-12-05',
        customer: 'Bro Edil ',
        seller: 'station',
        item: 16,
        payments: 16,
        remarks: null,
        created_at: '2022-12-09 23:25:27',
        updated_at: '2022-12-20 19:47:03'
      },
      {
        id: 1692,
        user_id: 1,
        date: '2022-12-12',
        customer: 'mix',
        seller: 'seller2',
        item: 9,
        payments: 6,
        remarks: null,
        created_at: '2022-12-13 01:14:21',
        updated_at: '2022-12-16 07:04:23'
      },
      {
        id: 1693,
        user_id: 1,
        date: '2022-12-11',
        customer: 'mix',
        seller: 'seller2',
        item: 9,
        payments: 9,
        remarks: null,
        created_at: '2022-12-16 07:03:59',
        updated_at: '2022-12-16 07:04:46'
      },
      {
        id: 1695,
        user_id: 1,
        date: '2022-12-14',
        customer: 'mix',
        seller: 'seller2',
        item: 6,
        payments: 0,
        remarks: null,
        created_at: '2022-12-16 07:05:37',
        updated_at: '2022-12-16 07:05:37'
      },
      {
        id: 1696,
        user_id: 1,
        date: '2022-12-15',
        customer: 'mix',
        seller: 'seller2',
        item: 9,
        payments: 5,
        remarks: null,
        created_at: '2022-12-16 07:06:18',
        updated_at: '2022-12-23 04:53:39'
      },
      {
        id: 1697,
        user_id: 1,
        date: '2022-12-09',
        customer: 'Bro Raul',
        seller: 'station',
        item: 3,
        payments: 3,
        remarks: null,
        created_at: '2022-12-16 07:07:33',
        updated_at: '2022-12-16 07:07:33'
      },
      {
        id: 1698,
        user_id: 1,
        date: '2022-12-15',
        customer: 'Bro Raul',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2022-12-16 07:07:50',
        updated_at: '2022-12-16 07:07:50'
      },
      {
        id: 1699,
        user_id: 1,
        date: '2022-12-15',
        customer: 'Bro Jose G.',
        seller: 'station',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2022-12-16 07:09:25',
        updated_at: '2022-12-16 07:09:25'
      },
      {
        id: 1700,
        user_id: 1,
        date: '2022-12-15',
        customer: 'mix',
        seller: 'seller1',
        item: 8,
        payments: 8,
        remarks: null,
        created_at: '2022-12-16 07:10:42',
        updated_at: '2022-12-16 07:10:42'
      },
      {
        id: 1701,
        user_id: 1,
        date: '2022-12-13',
        customer: 'mix',
        seller: 'seller2',
        item: 8,
        payments: 6,
        remarks: null,
        created_at: '2022-12-16 07:12:20',
        updated_at: '2022-12-16 07:12:20'
      },
      {
        id: 1702,
        user_id: 1,
        date: '2022-12-14',
        customer: 'Bro Gerry C.',
        seller: 'station',
        item: 22,
        payments: 22,
        remarks: null,
        created_at: '2022-12-16 07:13:54',
        updated_at: '2022-12-16 07:13:54'
      },
      {
        id: 1703,
        user_id: 1,
        date: '2022-12-13',
        customer: 'Sis MG Cabiltes',
        seller: 'station',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2022-12-16 07:15:02',
        updated_at: '2022-12-16 07:15:02'
      },
      {
        id: 1704,
        user_id: 1,
        date: '2022-12-11',
        customer: 'Sis Rosalie',
        seller: 'station',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2022-12-16 07:16:53',
        updated_at: '2022-12-16 07:16:53'
      },
      {
        id: 1705,
        user_id: 1,
        date: '2022-12-20',
        customer: 'Bro Edil',
        seller: 'station',
        item: 15,
        payments: 15,
        remarks: null,
        created_at: '2022-12-20 19:39:44',
        updated_at: '2022-12-20 19:39:44'
      },
      {
        id: 1706,
        user_id: 1,
        date: '2022-12-16',
        customer: 'mix',
        seller: 'seller2',
        item: 5,
        payments: 5,
        remarks: null,
        created_at: '2022-12-20 19:41:13',
        updated_at: '2022-12-20 19:41:13'
      },
      {
        id: 1707,
        user_id: 1,
        date: '2022-12-17',
        customer: 'mix',
        seller: 'seller2',
        item: 13,
        payments: 7,
        remarks: null,
        created_at: '2022-12-20 19:41:36',
        updated_at: '2022-12-20 19:41:36'
      },
      {
        id: 1708,
        user_id: 1,
        date: '2022-12-18',
        customer: 'mix',
        seller: 'seller2',
        item: 14,
        payments: 10,
        remarks: null,
        created_at: '2022-12-20 19:41:58',
        updated_at: '2022-12-20 19:41:58'
      },
      {
        id: 1709,
        user_id: 1,
        date: '2022-12-19',
        customer: 'mix',
        seller: 'seller2',
        item: 13,
        payments: 5,
        remarks: null,
        created_at: '2022-12-20 19:42:20',
        updated_at: '2022-12-20 19:42:20'
      },
      {
        id: 1710,
        user_id: 1,
        date: '2022-12-20',
        customer: 'Bro Jose G.',
        seller: 'station',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2022-12-20 19:43:12',
        updated_at: '2022-12-20 19:44:03'
      },
      {
        id: 1712,
        user_id: 1,
        date: '2022-12-22',
        customer: 'Sis MG Cabiltes',
        seller: 'station',
        item: 20,
        payments: 20,
        remarks: null,
        created_at: '2022-12-23 04:39:45',
        updated_at: '2022-12-23 04:39:45'
      },
      {
        id: 1713,
        user_id: 1,
        date: '2022-12-21',
        customer: 'mix',
        seller: 'seller1',
        item: 17,
        payments: 17,
        remarks: null,
        created_at: '2022-12-23 04:46:21',
        updated_at: '2022-12-23 04:46:21'
      },
      {
        id: 1714,
        user_id: 1,
        date: '2022-12-23',
        customer: 'mix',
        seller: 'seller2',
        item: 15,
        payments: 10,
        remarks: null,
        created_at: '2022-12-23 23:34:23',
        updated_at: '2022-12-29 09:37:39'
      },
      {
        id: 1715,
        user_id: 1,
        date: '2022-12-24',
        customer: 'Bro Raul',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2022-12-29 09:33:18',
        updated_at: '2022-12-29 09:33:18'
      },
      {
        id: 1716,
        user_id: 1,
        date: '2022-12-27',
        customer: 'Bro Jose',
        seller: 'station',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2022-12-29 09:33:48',
        updated_at: '2022-12-29 09:34:30'
      },
      {
        id: 1717,
        user_id: 1,
        date: '2022-12-28',
        customer: 'Sis Rosalie',
        seller: 'station',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2022-12-29 09:35:53',
        updated_at: '2022-12-29 09:35:53'
      },
      {
        id: 1718,
        user_id: 1,
        date: '2022-12-29',
        customer: 'walk in',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2022-12-29 09:36:45',
        updated_at: '2022-12-29 09:36:45'
      },
      {
        id: 1719,
        user_id: 1,
        date: '2022-12-24',
        customer: 'mix',
        seller: 'seller2',
        item: 13,
        payments: 5,
        remarks: null,
        created_at: '2022-12-29 09:41:27',
        updated_at: '2022-12-29 09:41:27'
      },
      {
        id: 1720,
        user_id: 1,
        date: '2022-12-28',
        customer: 'mix',
        seller: 'seller2',
        item: 13,
        payments: 10,
        remarks: null,
        created_at: '2022-12-29 09:42:17',
        updated_at: '2022-12-29 09:42:17'
      },
      {
        id: 1721,
        user_id: 1,
        date: '2022-12-29',
        customer: 'mix',
        seller: 'seller2',
        item: 13,
        payments: 7,
        remarks: null,
        created_at: '2022-12-29 09:42:42',
        updated_at: '2022-12-29 09:42:42'
      },
      {
        id: 1722,
        user_id: 1,
        date: '2022-12-25',
        customer: 'Bro Gerry C.',
        seller: 'station',
        item: 28,
        payments: 28,
        remarks: null,
        created_at: '2022-12-29 12:06:08',
        updated_at: '2022-12-29 12:06:08'
      },
      {
        id: 1723,
        user_id: 1,
        date: '2022-12-29',
        customer: 'Bro Gerry C.',
        seller: 'station',
        item: 18,
        payments: 18,
        remarks: null,
        created_at: '2022-12-29 12:06:30',
        updated_at: '2022-12-29 12:06:30'
      },
      {
        id: 1724,
        user_id: 1,
        date: '2022-12-31',
        customer: 'Sis MG Cabiltes',
        seller: 'station',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2023-01-02 18:37:13',
        updated_at: '2023-01-02 18:37:13'
      },
      {
        id: 1725,
        user_id: 1,
        date: '2022-12-31',
        customer: 'mix',
        seller: 'seller2',
        item: 10,
        payments: 5,
        remarks: null,
        created_at: '2023-01-02 18:40:39',
        updated_at: '2023-01-02 18:40:39'
      },
      {
        id: 1726,
        user_id: 1,
        date: '2023-01-01',
        customer: 'mix',
        seller: 'seller1',
        item: 12,
        payments: 12,
        remarks: null,
        created_at: '2023-01-02 18:47:32',
        updated_at: '2023-01-02 18:47:32'
      },
      {
        id: 1727,
        user_id: 1,
        date: '2023-01-01',
        customer: 'Bro Edil',
        seller: 'station',
        item: 17,
        payments: 17,
        remarks: null,
        created_at: '2023-01-02 18:53:44',
        updated_at: '2023-01-02 18:53:44'
      },
      {
        id: 1728,
        user_id: 1,
        date: '2023-01-01',
        customer: 'Bro Jose',
        seller: 'station',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2023-01-02 18:54:01',
        updated_at: '2023-01-02 18:54:01'
      },
      {
        id: 1729,
        user_id: 1,
        date: '2023-01-02',
        customer: 'Sis Angie',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2023-01-02 18:55:12',
        updated_at: '2023-01-02 18:55:31'
      },
      {
        id: 1730,
        user_id: 1,
        date: '2023-01-01',
        customer: 'walk in',
        seller: 'station',
        item: 2,
        payments: 2,
        remarks: null,
        created_at: '2023-01-02 18:56:26',
        updated_at: '2023-01-02 18:56:26'
      },
      {
        id: 1731,
        user_id: 1,
        date: '2023-01-04',
        customer: 'Sis Rosalie',
        seller: 'station',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2023-01-04 20:42:12',
        updated_at: '2023-01-04 20:42:12'
      },
      {
        id: 1732,
        user_id: 1,
        date: '2023-01-04',
        customer: 'mix',
        seller: 'seller2',
        item: 15,
        payments: 10,
        remarks: null,
        created_at: '2023-01-04 20:43:28',
        updated_at: '2023-01-04 20:43:28'
      },
      {
        id: 1733,
        user_id: 1,
        date: '2023-01-05',
        customer: 'mix',
        seller: 'seller2',
        item: 10,
        payments: 5,
        remarks: null,
        created_at: '2023-01-05 18:37:52',
        updated_at: '2023-01-05 18:37:52'
      },
      {
        id: 1734,
        user_id: 1,
        date: '2023-01-10',
        customer: 'Sis Rosalie',
        seller: 'station',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2023-01-14 17:10:21',
        updated_at: '2023-01-14 17:10:21'
      },
      {
        id: 1735,
        user_id: 1,
        date: '2023-01-13',
        customer: 'Sis Angie',
        seller: 'station',
        item: 4,
        payments: 4,
        remarks: null,
        created_at: '2023-01-14 17:11:26',
        updated_at: '2023-01-14 17:11:26'
      },
      {
        id: 1736,
        user_id: 1,
        date: '2023-01-07',
        customer: 'Sis MG Cabiltes',
        seller: 'station',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2023-01-14 17:13:35',
        updated_at: '2023-01-14 17:13:35'
      },
      {
        id: 1737,
        user_id: 1,
        date: '2023-01-14',
        customer: 'Sis MG Cabiltes',
        seller: 'station',
        item: 15,
        payments: 15,
        remarks: null,
        created_at: '2023-01-14 17:14:00',
        updated_at: '2023-01-14 17:14:00'
      },
      {
        id: 1738,
        user_id: 1,
        date: '2023-01-14',
        customer: 'Bro Gerry C.',
        seller: 'station',
        item: 26,
        payments: 26,
        remarks: null,
        created_at: '2023-01-14 17:15:24',
        updated_at: '2023-01-14 17:15:24'
      },
      {
        id: 1739,
        user_id: 1,
        date: '2023-01-06',
        customer: 'Bro Jose',
        seller: 'station',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2023-01-14 17:16:45',
        updated_at: '2023-01-14 17:16:45'
      },
      {
        id: 1740,
        user_id: 1,
        date: '2023-01-12',
        customer: 'Bro Jose',
        seller: 'station',
        item: 10,
        payments: 10,
        remarks: null,
        created_at: '2023-01-14 17:16:59',
        updated_at: '2023-01-14 17:16:59'
      },
      {
        id: 1743,
        user_id: 1,
        date: '2023-01-06',
        customer: 'mix',
        seller: 'seller2',
        item: 14,
        payments: 10,
        remarks: null,
        created_at: '2023-01-14 17:20:24',
        updated_at: '2023-01-14 17:20:24'
      },
      {
        id: 1744,
        user_id: 1,
        date: '2023-01-07',
        customer: 'mix',
        seller: 'seller2',
        item: 13,
        payments: 13,
        remarks: null,
        created_at: '2023-01-14 17:23:00',
        updated_at: '2023-01-14 17:23:00'
      },
      {
        id: 1745,
        user_id: 1,
        date: '2023-01-09',
        customer: 'mix',
        seller: 'seller2',
        item: 8,
        payments: 4,
        remarks: null,
        created_at: '2023-01-14 17:23:54',
        updated_at: '2023-01-14 17:23:54'
      },
      {
        id: 1746,
        user_id: 1,
        date: '2023-01-10',
        customer: 'mix',
        seller: 'seller2',
        item: 6,
        payments: 6,
        remarks: null,
        created_at: '2023-01-14 17:24:24',
        updated_at: '2023-01-14 17:24:24'
      },
      {
        id: 1747,
        user_id: 1,
        date: '2023-01-11',
        customer: 'mix',
        seller: 'seller2',
        item: 14,
        payments: 14,
        remarks: null,
        created_at: '2023-01-14 17:24:45',
        updated_at: '2023-01-14 17:24:45'
      },
      {
        id: 1748,
        user_id: 1,
        date: '2023-01-07',
        customer: 'mix',
        seller: 'seller1',
        item: 8,
        payments: 8,
        remarks: null,
        created_at: '2023-01-14 17:34:17',
        updated_at: '2023-01-14 17:34:17'
      }
    ]
  }),
  getters: {
    // seller
    station: (state) =>
      state.sales.filter((sale) => sale.seller.match(/station/g)),
    seller1: (state) =>
      state.sales.filter((sale) => sale.seller.match(/seller1/g)),
    seller2: (state) =>
      state.sales.filter((sale) => sale.seller.match(/seller2/g)),

    // monthly sales
    January: (state) =>
      state.sales.filter((sale) => sale.date.match(/20[0-9][0-9]-01/g)),
    February: (state) =>
      state.sales.filter((sale) => sale.date.match(/20[0-9][0-9]-02/g)),
    March: (state) =>
      state.sales.filter((sale) => sale.date.match(/20[0-9][0-9]-03/g)),
    April: (state) =>
      state.sales.filter((sale) => sale.date.match(/20[0-9][0-9]-04/g)),
    May: (state) =>
      state.sales.filter((sale) => sale.date.match(/20[0-9][0-9]-05/g)),
    June: (state) =>
      state.sales.filter((sale) => sale.date.match(/20[0-9][0-9]-06/g)),
    July: (state) =>
      state.sales.filter((sale) => sale.date.match(/20[0-9][0-9]-07/g)),
    August: (state) =>
      state.sales.filter((sale) => sale.date.match(/20[0-9][0-9]-08/g)),
    September: (state) =>
      state.sales.filter((sale) => sale.date.match(/20[0-9][0-9]-09/g)),
    October: (state) =>
      state.sales.filter((sale) => sale.date.match(/20[0-9][0-9]-10/g)),
    November: (state) =>
      state.sales.filter((sale) => sale.date.match(/20[0-9][0-9]-11/g)),
    December: (state) =>
      state.sales.filter((sale) => sale.date.match(/20[0-9][0-9]-12/g)),

    // get the total number of items in current year
    totalItemsGetter: (state) =>
      state.sales
        .filter((sale) => sale.date.match(new Date().getFullYear()))
        .reduce((currentTotal, sale) => {
          return sale.item + currentTotal;
        }, 0),

    // get the total payments for items in current year
    totalPaymentsGetter: (state) =>
      state.sales
        .filter((sale) => sale.date.match(new Date().getFullYear()))
        .reduce((currentTotal, sale) => {
          return sale.payments + currentTotal;
        }, 0),

    // get the total items of station in current year
    totalStationItems: (state) =>
      state.sales
        .filter(
          (sale) =>
            sale.seller.match(/station/g) &&
            sale.date.match(new Date().getFullYear())
        )
        .reduce((currentTotal, sale) => {
          return sale.item + currentTotal;
        }, 0),

    // get the total payments of station in current year
    totalStationPayments: (state) =>
      state.sales
        .filter(
          (sale) =>
            sale.seller.match(/station/g) &&
            sale.date.match(new Date().getFullYear())
        )
        .reduce((currentTotal, sale) => {
          return sale.payments + currentTotal;
        }, 0),

    // get the total items  of seller1 in current year
    totalSeller1Items: (state) =>
      state.sales
        .filter(
          (sale) =>
            sale.seller.match(/seller1/g) &&
            sale.date.match(new Date().getFullYear())
        )
        .reduce((currentTotal, sale) => {
          return sale.item + currentTotal;
        }, 0),

    // get the total payments of seller1 in current year
    totalSeller1Payments: (state) =>
      state.sales
        .filter(
          (sale) =>
            sale.seller.match(/seller1/g) &&
            sale.date.match(new Date().getFullYear())
        )
        .reduce((currentTotal, sale) => {
          return sale.payments + currentTotal;
        }, 0),

    // get the total items of seller2 in current year
    totalSeller2Items: (state) =>
      state.sales
        .filter(
          (sale) =>
            sale.seller.match(/seller2/g) &&
            sale.date.match(new Date().getFullYear())
        )
        .reduce((currentTotal, sale) => {
          return sale.item + currentTotal;
        }, 0),

    // get the total payments of seller2 in current year
    totalSeller2Payments: (state) =>
      state.sales
        .filter(
          (sale) =>
            sale.seller.match(/seller2/g) &&
            sale.date.match(new Date().getFullYear())
        )
        .reduce((currentTotal, sale) => {
          return sale.payments + currentTotal;
        }, 0)
  },
  actions: {
    addSaleAction({ commit }, payload) {
      commit('ADD_SALE', payload);
    },

    updateSaleAction({ commit }, payload) {
      commit('UPDATE_SALE', payload);
    },

    deleteSaleAction({ commit }, payload) {
      commit('DELETE_SALE', payload);
    }
  },
  mutations: {
    ADD_SALE: (state, payload) => {
      state.sales.push(payload);
      store.state.show_add_form = false;
    },

    UPDATE_SALE: (state, payload) => {
      const index = state.sales.findIndex((sale) => sale.id === payload.id);
      if (index !== -1) {
        state.sales.splice(index, 1, payload);
      }
      store.state.show_update_form = false;
      store.state.selected_id = null;
    },

    DELETE_SALE: (state, payload) => {
      const index = state.sales.findIndex((sale) => sale.id === payload.id);
      if (index !== -1) {
        state.sales.splice(index, 1);
      }
      store.state.show_delete_button = false;
      store.state.selected_id = null;
    }
  }
};

const expensesModule = {
  namespaced: true,
  state: () => ({
    items: [
      {
        id: 8,
        user_id: 1,
        date: '2022-04-28',
        employee: 'station',
        item: null,
        amount: 200,
        remarks: 'rusi gas',
        created_at: '2022-05-22 23:56:27',
        updated_at: '2022-07-06 19:56:00'
      },
      {
        id: 9,
        user_id: 1,
        date: '2022-04-30',
        employee: 'station',
        item: null,
        amount: 483,
        remarks: 'asin at selyo',
        created_at: '2022-05-22 23:58:02',
        updated_at: '2022-05-22 23:58:02'
      },
      {
        id: 10,
        user_id: 1,
        date: '2022-04-30',
        employee: 'station',
        item: null,
        amount: 220,
        remarks: 'rubber floor rusi',
        created_at: '2022-05-22 23:58:40',
        updated_at: '2022-07-06 19:38:38'
      },
      {
        id: 11,
        user_id: 1,
        date: '2022-05-09',
        employee: 'station',
        item: null,
        amount: 150,
        remarks: 'rusi gas',
        created_at: '2022-05-22 23:59:39',
        updated_at: '2022-05-22 23:59:52'
      },
      {
        id: 12,
        user_id: 1,
        date: '2022-05-11',
        employee: 'station',
        item: null,
        amount: 635,
        remarks: 'filter, sabon',
        created_at: '2022-05-23 00:00:57',
        updated_at: '2022-05-23 00:00:57'
      },
      {
        id: 13,
        user_id: 1,
        date: '2022-05-11',
        employee: 'station',
        item: null,
        amount: 130,
        remarks: 'selyo',
        created_at: '2022-05-23 00:02:06',
        updated_at: '2022-05-23 00:02:06'
      },
      {
        id: 14,
        user_id: 1,
        date: '2022-05-23',
        employee: 'station',
        item: null,
        amount: 3286,
        remarks: 'meralco c/o b.jun\n',
        created_at: '2022-05-23 09:38:06',
        updated_at: '2022-07-06 20:01:15'
      },
      {
        id: 16,
        user_id: 1,
        date: '2022-05-29',
        employee: 'station',
        item: null,
        amount: 200,
        remarks: 'rusi gas',
        created_at: '2022-06-01 04:59:10',
        updated_at: '2022-06-01 04:59:10'
      },
      {
        id: 17,
        user_id: 1,
        date: '2022-06-07',
        employee: 'station',
        item: null,
        amount: 220,
        remarks: 'push brush',
        created_at: '2022-06-12 02:41:46',
        updated_at: '2022-06-12 02:41:46'
      },
      {
        id: 18,
        user_id: 1,
        date: '2022-06-09',
        employee: 'station',
        item: null,
        amount: 200,
        remarks: 'rusi gas',
        created_at: '2022-06-12 02:42:12',
        updated_at: '2022-06-12 02:42:12'
      },
      {
        id: 21,
        user_id: 1,
        date: '2021-01-04',
        employee: 'seller2',
        item: null,
        amount: 2815,
        remarks: 'from jan.04 to jan26 \n',
        created_at: '2022-06-14 21:18:18',
        updated_at: '2022-06-14 23:03:22'
      },
      {
        id: 22,
        user_id: 1,
        date: '2021-02-01',
        employee: 'seller2',
        item: null,
        amount: 5079,
        remarks: 'from feb.01 to feb16',
        created_at: '2022-06-14 21:24:48',
        updated_at: '2022-06-14 23:03:36'
      },
      {
        id: 23,
        user_id: 1,
        date: '2021-03-01',
        employee: 'seller2',
        item: null,
        amount: 9015,
        remarks: 'from march 01 to march26',
        created_at: '2022-06-14 21:30:27',
        updated_at: '2022-06-14 23:03:47'
      },
      {
        id: 24,
        user_id: 1,
        date: '2021-04-05',
        employee: 'seller2',
        item: null,
        amount: 7245,
        remarks: 'from april 05 to april12',
        created_at: '2022-06-14 21:50:26',
        updated_at: '2022-06-14 23:04:34'
      },
      {
        id: 25,
        user_id: 1,
        date: '2021-05-03',
        employee: 'seller2',
        item: null,
        amount: 4820,
        remarks: 'from may 03 to may25',
        created_at: '2022-06-14 22:20:05',
        updated_at: '2022-06-14 23:24:05'
      },
      {
        id: 26,
        user_id: 1,
        date: '2021-06-02',
        employee: 'seller2',
        item: null,
        amount: 1650,
        remarks: 'from june 02 to june 24',
        created_at: '2022-06-14 23:10:14',
        updated_at: '2022-06-14 23:10:14'
      },
      {
        id: 27,
        user_id: 1,
        date: '2021-07-05',
        employee: 'seller2',
        item: null,
        amount: 5045,
        remarks: 'from july 05 to july 27',
        created_at: '2022-06-14 23:13:28',
        updated_at: '2022-06-14 23:13:28'
      },
      {
        id: 28,
        user_id: 1,
        date: '2021-08-08',
        employee: 'seller2',
        item: null,
        amount: 1900,
        remarks: 'from august 08 to august 31',
        created_at: '2022-06-14 23:15:19',
        updated_at: '2022-06-14 23:15:19'
      },
      {
        id: 29,
        user_id: 1,
        date: '2021-09-03',
        employee: 'seller2',
        item: null,
        amount: 1435,
        remarks: 'from september 03 to september 29',
        created_at: '2022-06-14 23:17:05',
        updated_at: '2022-06-14 23:17:05'
      },
      {
        id: 30,
        user_id: 1,
        date: '2021-10-04',
        employee: 'seller2',
        item: null,
        amount: 500,
        remarks: 'from oct 04,2021',
        created_at: '2022-06-14 23:19:23',
        updated_at: '2022-06-14 23:19:50'
      },
      {
        id: 31,
        user_id: 1,
        date: '2021-12-25',
        employee: 'seller2',
        item: null,
        amount: 8100,
        remarks: 'from december 25',
        created_at: '2022-06-14 23:23:15',
        updated_at: '2022-06-14 23:23:15'
      },
      {
        id: 33,
        user_id: 1,
        date: '2022-06-17',
        employee: 'station',
        item: null,
        amount: 330,
        remarks: 'hydrosep filter,sabon, teflon',
        created_at: '2022-06-18 11:02:22',
        updated_at: '2022-06-18 11:02:22'
      },
      {
        id: 34,
        user_id: 1,
        date: '2022-06-17',
        employee: 'station',
        item: null,
        amount: 114,
        remarks: 'sponge, towel, brush',
        created_at: '2022-06-18 11:03:31',
        updated_at: '2022-06-18 11:03:31'
      },
      {
        id: 35,
        user_id: 1,
        date: '2022-06-20',
        employee: 'station',
        item: null,
        amount: 3155,
        remarks: 'meralco dsHarris-2,000php\nb.jun-1,155php',
        created_at: '2022-06-29 22:53:11',
        updated_at: '2022-07-06 20:03:28'
      },
      {
        id: 36,
        user_id: 1,
        date: '2022-06-17',
        employee: 'station',
        item: null,
        amount: 6335,
        remarks: 'water bill c/o bro edil',
        created_at: '2022-07-06 19:31:43',
        updated_at: '2022-11-15 08:25:24'
      },
      {
        id: 39,
        user_id: 1,
        date: '2022-05-25',
        employee: 'station',
        item: null,
        amount: 410,
        remarks: 'filters',
        created_at: '2022-07-06 19:59:03',
        updated_at: '2022-07-06 19:59:03'
      },
      {
        id: 46,
        user_id: 1,
        date: '2022-09-02',
        employee: 'seller2',
        item: null,
        amount: 100,
        remarks: 'gas',
        created_at: '2022-09-02 12:18:34',
        updated_at: '2022-09-02 12:18:34'
      },
      {
        id: 47,
        user_id: 1,
        date: '2022-08-31',
        employee: 'seller2',
        item: null,
        amount: 100,
        remarks: 'gas',
        created_at: '2022-09-02 12:18:49',
        updated_at: '2022-09-02 12:18:49'
      },
      {
        id: 48,
        user_id: 1,
        date: '2022-08-28',
        employee: 'seller2',
        item: null,
        amount: 100,
        remarks: 'gas',
        created_at: '2022-09-03 12:30:04',
        updated_at: '2022-09-03 12:30:04'
      },
      {
        id: 49,
        user_id: 1,
        date: '2022-09-03',
        employee: 'seller2',
        item: null,
        amount: 100,
        remarks: 'gas',
        created_at: '2022-09-05 04:05:28',
        updated_at: '2022-09-05 04:05:28'
      },
      {
        id: 50,
        user_id: 1,
        date: '2022-09-02',
        employee: 'seller1',
        item: null,
        amount: 200,
        remarks: 'gas',
        created_at: '2022-09-07 04:45:01',
        updated_at: '2022-09-07 04:45:01'
      },
      {
        id: 51,
        user_id: 1,
        date: '2022-09-09',
        employee: 'seller1',
        item: null,
        amount: 100,
        remarks: 'gas',
        created_at: '2022-09-13 22:19:44',
        updated_at: '2022-09-13 22:19:44'
      },
      {
        id: 52,
        user_id: 1,
        date: '2022-09-07',
        employee: 'seller2',
        item: null,
        amount: 200,
        remarks: 'gas',
        created_at: '2022-09-14 09:33:01',
        updated_at: '2022-09-14 09:33:01'
      },
      {
        id: 53,
        user_id: 1,
        date: '2022-09-14',
        employee: 'station',
        item: null,
        amount: 2883,
        remarks: 'water bill Aug.08 to Sept.08',
        created_at: '2022-09-14 09:38:46',
        updated_at: '2022-10-06 11:21:00'
      },
      {
        id: 54,
        user_id: 1,
        date: '2022-08-16',
        employee: 'station',
        item: null,
        amount: 1765,
        remarks: 'meralco bill Aug.15 to Sept.14',
        created_at: '2022-09-16 11:25:40',
        updated_at: '2022-10-06 11:23:13'
      },
      {
        id: 55,
        user_id: 1,
        date: '2022-09-19',
        employee: 'station',
        item: null,
        amount: 685,
        remarks: '4 hydrosep filters &\nseal, dishwashing,08-29-22 reciept',
        created_at: '2022-09-19 12:38:49',
        updated_at: '2022-10-15 19:51:37'
      },
      {
        id: 56,
        user_id: 1,
        date: '2022-09-16',
        employee: 'seller1',
        item: null,
        amount: 100,
        remarks: 'gas',
        created_at: '2022-09-19 12:44:47',
        updated_at: '2022-09-19 12:44:47'
      },
      {
        id: 58,
        user_id: 1,
        date: '2022-09-30',
        employee: 'seller1',
        item: null,
        amount: 700,
        remarks: 'gas bro.sam ',
        created_at: '2022-10-06 10:18:18',
        updated_at: '2022-10-15 19:09:01'
      },
      {
        id: 59,
        user_id: 1,
        date: '2022-09-31',
        employee: 'station',
        item: null,
        amount: 3731,
        remarks: 'water bill 09Sept-090ct.',
        created_at: '2022-10-07 10:07:51',
        updated_at: '2022-10-07 10:07:51'
      },
      {
        id: 64,
        user_id: 1,
        date: '2022-10-14',
        employee: 'station',
        item: null,
        amount: 500,
        remarks: '1pc. cocopure',
        created_at: '2022-10-14 13:31:53',
        updated_at: '2022-10-15 10:39:40'
      },
      {
        id: 65,
        user_id: 1,
        date: '2022-10-15',
        employee: 'station',
        item: null,
        amount: 238,
        remarks: 'selyo',
        created_at: '2022-10-15 10:39:55',
        updated_at: '2022-10-15 10:39:55'
      },
      {
        id: 66,
        user_id: 1,
        date: '2022-10-07',
        employee: 'station',
        item: null,
        amount: 300,
        remarks: 'barako sprocket, sparkplug',
        created_at: '2022-10-15 19:31:17',
        updated_at: '2022-11-17 06:23:05'
      },
      {
        id: 67,
        user_id: 1,
        date: '2022-10-10',
        employee: 'station',
        item: null,
        amount: 200,
        remarks: 'gas barako',
        created_at: '2022-10-15 19:34:36',
        updated_at: '2022-10-15 19:34:36'
      },
      {
        id: 68,
        user_id: 1,
        date: '2022-10-11',
        employee: 'station',
        item: null,
        amount: 350,
        remarks: 'barako knuckle bearing ',
        created_at: '2022-10-15 19:35:24',
        updated_at: '2022-11-17 06:23:35'
      },
      {
        id: 69,
        user_id: 1,
        date: '2022-10-18',
        employee: 'station',
        item: null,
        amount: 200,
        remarks: 'gas barako',
        created_at: '2022-10-18 14:04:47',
        updated_at: '2022-10-18 14:04:47'
      },
      {
        id: 70,
        user_id: 1,
        date: '2022-10-18',
        employee: 'station',
        item: null,
        amount: 2209,
        remarks: 'meralco bill Sept15-Oct14',
        created_at: '2022-10-18 14:14:44',
        updated_at: '2022-10-18 14:14:44'
      },
      {
        id: 71,
        user_id: 1,
        date: '2022-10-19',
        employee: 'station',
        item: null,
        amount: 89,
        remarks: 'cabletie, 2pcs tabo',
        created_at: '2022-10-19 20:37:12',
        updated_at: '2022-10-19 20:37:12'
      },
      {
        id: 72,
        user_id: 1,
        date: '2022-10-21',
        employee: 'station',
        item: null,
        amount: 200,
        remarks: 'gas barako',
        created_at: '2022-10-21 18:11:02',
        updated_at: '2022-10-21 18:11:02'
      },
      {
        id: 74,
        user_id: 1,
        date: '2022-10-23',
        employee: 'station',
        item: null,
        amount: 800,
        remarks: 'barako gulong panghuli',
        created_at: '2022-10-23 06:15:16',
        updated_at: '2022-10-23 06:15:16'
      },
      {
        id: 75,
        user_id: 1,
        date: '2022-10-26',
        employee: 'station',
        item: null,
        amount: 200,
        remarks: 'gas barako',
        created_at: '2022-10-27 03:53:49',
        updated_at: '2022-10-28 07:56:32'
      },
      {
        id: 76,
        user_id: 1,
        date: '2022-10-05',
        employee: 'station',
        item: null,
        amount: 200,
        remarks: 'gas barako',
        created_at: '2022-10-31 04:42:13',
        updated_at: '2022-11-17 06:31:20'
      },
      {
        id: 77,
        user_id: 1,
        date: '2022-10-31',
        employee: 'station',
        item: null,
        amount: 400,
        remarks: 'pvc, sabon, ballvalve 1/2, 4wd',
        created_at: '2022-11-02 00:12:20',
        updated_at: '2022-11-16 19:03:15'
      },
      {
        id: 78,
        user_id: 1,
        date: '2022-11-03',
        employee: 'station',
        item: null,
        amount: 200,
        remarks: 'gas barako',
        created_at: '2022-11-03 17:21:25',
        updated_at: '2022-11-03 17:21:50'
      },
      {
        id: 79,
        user_id: 1,
        date: '2022-10-31',
        employee: 'station',
        item: null,
        amount: 60,
        remarks: 'barako engine sprocket reciept date 11/04/22',
        created_at: '2022-11-04 10:45:35',
        updated_at: '2022-11-17 06:25:47'
      },
      {
        id: 80,
        user_id: 1,
        date: '2022-10-31',
        employee: 'station',
        item: null,
        amount: 300,
        remarks: 'gas barako',
        created_at: '2022-11-07 20:50:12',
        updated_at: '2022-11-17 06:27:21'
      },
      {
        id: 83,
        user_id: 1,
        date: '2022-11-13',
        employee: 'station',
        item: null,
        amount: 300,
        remarks: 'gas barako',
        created_at: '2022-11-13 18:30:43',
        updated_at: '2022-11-13 18:30:43'
      },
      {
        id: 86,
        user_id: 1,
        date: '2022-11-15',
        employee: 'station',
        item: null,
        amount: 4985,
        remarks: 'water bill Oct.07-Nov.07',
        created_at: '2022-11-15 08:35:21',
        updated_at: '2022-11-15 08:35:21'
      },
      {
        id: 87,
        user_id: 1,
        date: '2022-10-31',
        employee: 'station',
        item: null,
        amount: 980,
        remarks: 'barako new rim,rius sawali reciept date 11/16/22',
        created_at: '2022-11-16 18:27:18',
        updated_at: '2022-11-16 18:27:18'
      },
      {
        id: 88,
        user_id: 1,
        date: '2022-11-08',
        employee: 'station',
        item: null,
        amount: 200,
        remarks: 'gas barako',
        created_at: '2022-11-16 18:44:49',
        updated_at: '2022-11-16 18:44:49'
      },
      {
        id: 89,
        user_id: 1,
        date: '2022-10-31',
        employee: 'station',
        item: null,
        amount: 580,
        remarks: '500ml bottle 200pcs\nreciept date 11/11/22',
        created_at: '2022-11-16 18:54:07',
        updated_at: '2022-11-16 18:55:35'
      },
      {
        id: 90,
        user_id: 1,
        date: '2022-10-31',
        employee: 'station',
        item: null,
        amount: 293,
        remarks: 'selyo, sabon reciept date 11/17/22',
        created_at: '2022-11-17 02:11:52',
        updated_at: '2022-11-17 02:13:14'
      },
      {
        id: 92,
        user_id: 1,
        date: '2022-10-15',
        employee: 'station',
        item: null,
        amount: 200,
        remarks: 'gas barako',
        created_at: '2022-11-17 08:24:47',
        updated_at: '2022-11-22 12:06:44'
      },
      {
        id: 93,
        user_id: 1,
        date: '2022-11-21',
        employee: 'station',
        item: null,
        amount: 2248,
        remarks: 'meralco bill date oct15-nov14',
        created_at: '2022-11-21 21:43:34',
        updated_at: '2022-11-21 21:43:34'
      },
      {
        id: 94,
        user_id: 1,
        date: '2022-11-21',
        employee: 'station',
        item: null,
        amount: 590,
        remarks: '1cocopure,1hydrosep filters',
        created_at: '2022-11-21 21:44:45',
        updated_at: '2022-11-21 21:44:45'
      },
      {
        id: 95,
        user_id: 1,
        date: '2022-11-21',
        employee: 'station',
        item: null,
        amount: 200,
        remarks: 'gas barako',
        created_at: '2022-11-21 21:45:25',
        updated_at: '2022-11-21 21:45:25'
      },
      {
        id: 96,
        user_id: 1,
        date: '2022-12-05',
        employee: 'station',
        item: null,
        amount: 200,
        remarks: 'gas barako',
        created_at: '2022-12-09 21:11:07',
        updated_at: '2022-12-09 23:27:20'
      },
      {
        id: 97,
        user_id: 1,
        date: '2022-12-08',
        employee: 'station',
        item: null,
        amount: 200,
        remarks: 'gas barako',
        created_at: '2022-12-09 21:11:17',
        updated_at: '2022-12-09 23:27:33'
      },
      {
        id: 98,
        user_id: 1,
        date: '2022-11-25',
        employee: 'station',
        item: null,
        amount: 200,
        remarks: 'gas barako',
        created_at: '2022-12-09 21:17:49',
        updated_at: '2022-12-09 21:17:49'
      },
      {
        id: 99,
        user_id: 1,
        date: '2022-11-30',
        employee: 'station',
        item: null,
        amount: 200,
        remarks: 'gas barako',
        created_at: '2022-12-09 21:17:58',
        updated_at: '2022-12-09 21:17:58'
      },
      {
        id: 100,
        user_id: 1,
        date: '2022-12-07',
        employee: 'station',
        item: null,
        amount: 4021,
        remarks: 'water bill Nov08-Dec07',
        created_at: '2022-12-09 23:28:37',
        updated_at: '2022-12-13 01:49:24'
      },
      {
        id: 101,
        user_id: 1,
        date: '2022-12-12',
        employee: 'station',
        item: null,
        amount: 300,
        remarks: 'gas barako',
        created_at: '2022-12-13 01:11:34',
        updated_at: '2022-12-13 01:11:34'
      },
      {
        id: 102,
        user_id: 1,
        date: '2022-12-20',
        employee: 'station',
        item: null,
        amount: 200,
        remarks: 'gas barako',
        created_at: '2022-12-20 19:47:35',
        updated_at: '2022-12-20 19:47:35'
      },
      {
        id: 103,
        user_id: 1,
        date: '2022-12-22',
        employee: 'station',
        item: null,
        amount: 200,
        remarks: 'gas barako',
        created_at: '2022-12-23 05:04:18',
        updated_at: '2022-12-23 05:04:18'
      },
      {
        id: 104,
        user_id: 1,
        date: '2022-12-22',
        employee: 'station',
        item: null,
        amount: 158,
        remarks: 'sabon, filter',
        created_at: '2022-12-23 05:04:51',
        updated_at: '2022-12-23 05:04:51'
      },
      {
        id: 105,
        user_id: 1,
        date: '2022-12-23',
        employee: 'station',
        item: null,
        amount: 2019,
        remarks: 'meralco  15Nov2022-14Dec2022',
        created_at: '2022-12-23 23:36:44',
        updated_at: '2022-12-23 23:36:44'
      },
      {
        id: 106,
        user_id: 1,
        date: '2022-12-29',
        employee: 'station',
        item: null,
        amount: 339,
        remarks: 'floor mop',
        created_at: '2022-12-29 12:10:45',
        updated_at: '2022-12-29 12:10:45'
      },
      {
        id: 107,
        user_id: 1,
        date: '2022-12-31',
        employee: 'station',
        item: null,
        amount: 200,
        remarks: 'gas barako',
        created_at: '2023-01-02 15:58:13',
        updated_at: '2023-01-02 15:58:13'
      },
      {
        id: 108,
        user_id: 1,
        date: '2023-01-05',
        employee: 'station',
        item: null,
        amount: 300,
        remarks: 'gas barako',
        created_at: '2023-01-05 18:36:25',
        updated_at: '2023-01-05 18:36:25'
      },
      {
        id: 109,
        user_id: 1,
        date: '2023-01-05',
        employee: 'station',
        item: null,
        amount: 120,
        remarks: 'clutch cable barako',
        created_at: '2023-01-05 18:36:49',
        updated_at: '2023-01-05 18:36:49'
      },
      {
        id: 110,
        user_id: 1,
        date: '2023-01-07',
        employee: 'station',
        item: null,
        amount: 180,
        remarks: 'filter',
        created_at: '2023-01-14 17:42:54',
        updated_at: '2023-01-14 17:42:54'
      },
      {
        id: 111,
        user_id: 1,
        date: '2023-01-11',
        employee: 'station',
        item: null,
        amount: 85,
        remarks: 'pvc pipe',
        created_at: '2023-01-14 17:43:50',
        updated_at: '2023-01-14 17:43:50'
      },
      {
        id: 112,
        user_id: 1,
        date: '2023-01-11',
        employee: 'station',
        item: null,
        amount: 300,
        remarks: 'gas barako',
        created_at: '2023-01-14 17:44:15',
        updated_at: '2023-01-14 17:44:15'
      },
      {
        id: 113,
        user_id: 1,
        date: '2023-01-13',
        employee: 'station',
        item: null,
        amount: 50,
        remarks: 'sabon',
        created_at: '2023-01-14 17:44:48',
        updated_at: '2023-01-14 17:44:48'
      },
      {
        id: 114,
        user_id: 1,
        date: '2023-01-12',
        employee: 'station',
        item: null,
        amount: 4021,
        remarks: 'water bill Dec07-Jan09',
        created_at: '2023-01-14 17:46:15',
        updated_at: '2023-01-14 17:46:15'
      }
    ]
  }),
  getters: {
    station: (state) =>
      state.items.filter((item) => item.employee === 'station'),
    seller1: (state) =>
      state.items.filter((item) => item.employee === 'seller1'),
    seller2: (state) =>
      state.items.filter((item) => item.employee === 'seller2'),
    // monthly
    January_: (state) =>
      state.items.filter((item) => item.date.match(/20[0-9][0-9]-01/g)),
    February_: (state) =>
      state.items.filter((item) => item.date.match(/20[0-9][0-9]-02/g)),
    March_: (state) =>
      state.items.filter((item) => item.date.match(/20[0-9][0-9]-03/g)),
    April_: (state) =>
      state.items.filter((item) => item.date.match(/20[0-9][0-9]-04/g)),
    May_: (state) =>
      state.items.filter((item) => item.date.match(/20[0-9][0-9]-05/g)),
    June_: (state) =>
      state.items.filter((item) => item.date.match(/20[0-9][0-9]-06/g)),
    July_: (state) =>
      state.items.filter((item) => item.date.match(/20[0-9][0-9]-07/g)),
    August_: (state) =>
      state.items.filter((item) => item.date.match(/20[0-9][0-9]-08/g)),
    September_: (state) =>
      state.items.filter((item) => item.date.match(/20[0-9][0-9]-09/g)),
    October_: (state) =>
      state.items.filter((item) => item.date.match(/20[0-9][0-9]-10/g)),
    November_: (state) =>
      state.items.filter((item) => item.date.match(/20[0-9][0-9]-11/g)),
    December_: (state) =>
      state.items.filter((item) => item.date.match(/20[0-9][0-9]-12/g)),

    totalExpensesGetter: (state) =>
      state.items
        .filter((item) => item.date.match(new Date().getFullYear()))
        .reduce((currentTotal, item) => {
          return item.amount + currentTotal;
        }, 0),

    totalStationExpensesGetter: (state, getters) => {
      return getters.station
        .filter((item) => item.date.match(new Date().getFullYear()))
        .reduce((currentTotal, item) => {
          return item.amount + currentTotal;
        }, 0);
    },

    totalSeller1ExpensesGetter: (state, getters) => {
      return getters.seller1
        .filter((item) => item.date.match(new Date().getFullYear()))
        .reduce((currentTotal, item) => {
          return item.amount + currentTotal;
        }, 0);
    },

    totalSeller2ExpensesGetter: (state, getters) => {
      return getters.seller2
        .filter((item) => item.date.match(new Date().getFullYear()))
        .reduce((currentTotal, item) => {
          return item.amount + currentTotal;
        }, 0);
    }
  },
  actions: {
    addItemAction({ commit }, payload) {
      commit('ADD_ITEM', payload);
    },

    updateItemAction({ commit }, payload) {
      commit('UPDATE_ITEM', payload);
    },

    deleteItemAction({ commit }, payload) {
      commit('DELETE_ITEM', payload);
    }
  },
  mutations: {
    ADD_ITEM: (state, payload) => {
      state.items.push(payload);
      store.state.show_add_form = false;
    },

    UPDATE_ITEM: (state, payload) => {
      const index = state.items.findIndex((item) => item.id === payload.id);
      if (index !== -1) {
        state.items.splice(index, 1, payload);
      }
      store.state.show_update_form = false;
      store.state.selected_id = null;
    },

    DELETE_ITEM: (state, payload) => {
      const index = state.items.findIndex((item) => item.id === payload.id);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
      store.state.show_delete_button = false;
      store.state.selected_id = null;
    }
  }
};

var store = new Vuex.Store({
  state: {
    selected_id: null,
    select_year: new Date().getFullYear(),
    current_year: new Date().getFullYear(),
    show_add_form: false,
    show_update_form: false,
    show_update_icon: false,
    show_delete_button: false
  },
  getters: {},
  actions: {
    showAddForm({ commit }) {
      commit('SHOW_ADD_FORM');
    },

    showUpdateForm({ commit }, id) {
      commit('SHOW_UPDATE_FORM', id);
    },

    showUpdateIcon({ commit }) {
      commit('SHOW_UPDATE_ICON');
    },

    showDeleteButton({ commit }) {
      commit('SHOW_DELETE_BUTTON');
    },

    cancelButton({ commit }) {
      commit('HIDE_FORM');
    }
  },
  mutations: {
    SHOW_ADD_FORM: (state) => {
      state.show_add_form = true;
      state.show_update_form = false;
      state.show_update_icon = false;
      state.show_delete_button = false;
      state.selected_id = null;
    },
    SHOW_UPDATE_FORM: (state, id) => {
      state.show_add_form = false;
      state.show_update_form = true;
      state.show_update_icon = false;
      state.show_delete_button = false;
      state.selected_id = id;
    },
    SHOW_UPDATE_ICON: (state) => {
      state.show_add_form = false;
      state.show_update_form = false;
      state.show_update_icon = true;
      state.show_delete_button = false;
      state.selected_id = null;
    },
    SHOW_DELETE_BUTTON: (state) => {
      state.show_add_form = false;
      state.show_update_form = false;
      state.show_update_icon = false;
      state.show_delete_button = true;
      state.selected_id = null;
    },
    HIDE_FORM: (state) => {
      state.show_add_form = false;
      state.show_update_form = false;
      state.show_update_icon = false;
      state.show_delete_button = false;
      state.selected_id = null;
    }
  },
  modules: {
    customersModule,
    salesModule,
    expensesModule
  }
});

var app = new Vue({
  el: '#app',
  store,

  data() {
    return {
      currentTab: 'Home',
      tabs: ['Home', 'Customers', 'Sales', 'Expenses', 'Financials']
    };
  },
  computed: {
    currentTabComponent: function () {
      return 'tab-' + this.currentTab.toLowerCase();
    }
  }
});

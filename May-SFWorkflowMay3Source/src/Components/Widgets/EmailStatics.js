/**
 * Email Statics Widget
 */
import React, { useState, Fragment } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';

// chart component
import TinyLineChart from 'Components/Charts/TinyLineChart';
import TinyAreaChart from 'Components/Charts/TinyAreaChart';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// chart config
import ChartConfig from 'Constants/chart-config';

// helpers
import { hexToRgbA } from 'Helpers/helpers';

function EmailStatics(props) {
   const [activeTabForTableSection, setActiveTabForTableSection] = useState('1')

   const toggleTableTabs = (tab) => {
     setActiveTabForTableSection(tab)
   }

   const { openChartData, bounceChartData, unsubscribeData } = props;
   return (
      <Fragment>
        <Nav tabs className="custom-tabs p-10">
          <NavItem>
            <NavLink className={classnames({ active: activeTabForTableSection === '1' })}
              onClick={() => { toggleTableTabs('1'); }}> <IntlMessages id="widgets.open" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: activeTabForTableSection === '2' })}
              onClick={() => { toggleTableTabs('2'); }}> <IntlMessages id="widgets.bounced" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: activeTabForTableSection === '3' })}
              onClick={() => { toggleTableTabs('3'); }}> <IntlMessages id="widgets.unsubscribe" />
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent className="tiny-line-chart" activeTab={activeTabForTableSection}>
          <TabPane tabId="1">
            <TinyLineChart
              label="Open"
              chartdata={openChartData.data}
              labels={openChartData.labels}
              borderColor={ChartConfig.color.white}
              pointBackgroundColor={ChartConfig.color.dark}
              height={170}
              pointBorderColor={ChartConfig.color.white}
              borderWidth={3}
            />
            <div className="d-flex justify-content-between p-20">
              {openChartData.labels.map((label, key) => (
                <span className="fs-12" key={key}>{label}</span>
              ))}
            </div>
          </TabPane>
          <TabPane tabId="2">
            <TinyAreaChart
              label="Bounced"
              chartdata={bounceChartData.data}
              labels={bounceChartData.labels}
              backgroundColor={hexToRgbA(ChartConfig.color.white, 0.5)}
              borderColor={ChartConfig.color.white}
              lineTension="0.4"
              height={150}
              gradient
            />
            <div className="d-flex justify-content-between p-20">
              {bounceChartData.labels.map((label, key) => (
                <span className="fs-12" key={key}>{label}</span>
              ))}
            </div>
          </TabPane>
          <TabPane tabId="3">
            <TinyLineChart
              label="Unsubscribe"
              chartdata={unsubscribeData.data}
              labels={unsubscribeData.labels}
              borderColor={ChartConfig.color.white}
              pointBackgroundColor={ChartConfig.color.dark}
              pointBorderColor={ChartConfig.color.white}
              height={190}
              borderWidth={3}
              xAxes={false}
            />
            <div className="d-flex justify-content-between p-20">
              {unsubscribeData.labels.map((label, key) => (
                <span className="fs-12" key={key}>{label}</span>
              ))}
            </div>
          </TabPane>
        </TabContent>
      </Fragment>
   );
}

export default EmailStatics;
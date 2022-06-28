import React from 'react';
import { FlexPlugin } from '@twilio/flex-plugin';

import CustomTaskList from './components/CustomTaskList/CustomTaskList';

const PLUGIN_NAME = 'OnthebeachPlugin';

export default class OnthebeachPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   */
  async init(flex, manager) {
    const options = { sortOrder: -1 };
    //flex.AgentDesktopView.Panel1.Content.add(<CustomTaskList key="OnthebeachPlugin-component" />, options);



    flex.CRMContainer.defaultProps.uriCallback = (task) =>
      task
        ? `https://www.bing.com/search?q=${task.attributes.myb}`
        : "http://bing.com/";

    flex.MainHeader.defaultProps.logoUrl =
      "https://static0.twilio.com/marketing/bundles/archetype.alpha/img/logo-wordmark--red.svg";
  }
}

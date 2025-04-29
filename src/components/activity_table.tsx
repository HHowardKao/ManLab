import { Tabs } from "@material-tailwind/react";
import * as React from "react";
export default function UnderlineTabs() {
  return (
    <Tabs defaultValue="html">
      <Tabs.List className="w-full rounded-none border-b border-secondary-dark bg-transparent py-0">
        <Tabs.Trigger className="w-full" value="html">
          活動一
        </Tabs.Trigger>
        <Tabs.Trigger className="w-full" value="react">
          活動二
        </Tabs.Trigger>
        <Tabs.Trigger className="w-full" value="vue">
          活動三
        </Tabs.Trigger>
        <Tabs.Trigger className="w-full" value="angular">
          活動四
        </Tabs.Trigger>
        <Tabs.Trigger className="w-full" value="svelte">
          活動五
        </Tabs.Trigger>
        <Tabs.TriggerIndicator className="rounded-none border-b-2 border-primary bg-transparent shadow-none" />
      </Tabs.List>
      <Tabs.Panel value="html">自由補充資訊</Tabs.Panel>
      <Tabs.Panel value="react">自由補充資訊</Tabs.Panel>
      <Tabs.Panel value="vue">自由補充資訊</Tabs.Panel>
      <Tabs.Panel value="angular">自由補充資訊</Tabs.Panel>
      <Tabs.Panel value="svelte">自由補充資訊</Tabs.Panel>
    </Tabs>
  );
}

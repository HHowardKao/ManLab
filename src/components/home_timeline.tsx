import * as React from "react";
import { Timeline, Typography } from "@material-tailwind/react";

export default function TimelineDemo() {
  return (
    <Timeline color="secondary" orientation="vertical">
      <Timeline.Item>
        <Timeline.Header>
          <Timeline.Separator />
          <Timeline.Icon className="h-3 w-3" />
        </Timeline.Header>
        <Timeline.Body className="-translate-y-1.5">
          <Typography color="default" className="font-bold">
            實驗室介紹(一)
          </Typography>
          <Typography type="small" className="mt-2 text-foreground">
            可以寫一些內容，研究領域阿或是畢業規定實驗室規則等等的，修課規定之類的
          </Typography>
        </Timeline.Body>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Header>
          <Timeline.Separator />
          <Timeline.Icon className="h-3 w-3" />
        </Timeline.Header>
        <Timeline.Body className="-translate-y-1.5">
          <Typography color="default" className="font-bold">
            實驗室介紹(二)
          </Typography>
          <Typography type="small" className="mt-2 text-foreground">
            本奈米科學與元件實驗室致力於奈米科學的研究及應用，嘗試在各種奈米材料合成及元件設計及制作，並加入奈米尺度的結構設計，探討奈米尺度下的物理現象，並且改善元件的效益與結果。本實驗室也與其他學術界工業界的合作相當密切，目前實驗室發展的方向主要有：目前研究方向包含奈米結構銅銦鎵硒太陽能電池、電阻式記憶體、二維材料等新穎功能元件開發。
          </Typography>
        </Timeline.Body>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Header>
          <Timeline.Icon className="h-3 w-3" />
        </Timeline.Header>
        <Timeline.Body className="-translate-y-1.5">
          <Typography color="default" className="font-bold">
            實驗室介紹(三)
          </Typography>
          <Typography type="small" className="mt-2 text-foreground">
            補內容
          </Typography>
        </Timeline.Body>
      </Timeline.Item>
    </Timeline>
  );
}

import React from "react";
import { Card, Typography, Avatar, Tooltip } from "@material-tailwind/react";

export default function BlogCard() {
  return (
    <Card className="max-w-[24rem] overflow-hidden">
      <Card.Body>
        <Typography type="h6">連絡電話</Typography>
        <Typography className="mt-1 text-foreground">
          03-5715131 #42171 (Lab:33876)
        </Typography>
        <Typography type="h6">辦公室</Typography>
        <Typography className="mt-1 text-foreground">
          國立清華大學台達館T429室 (Lab:材料科技館411,413，材料實驗館103,107)
        </Typography>
        <Typography type="h6">Email</Typography>
        <Typography className="mt-1 text-foreground">
          tjyen@mx.nthu.edu.tw
        </Typography>
        <Typography type="h6">學歷</Typography>
        <Typography className="mt-1 text-foreground">
          美國加州大學洛杉磯分校 材料科學工程 博士
        </Typography>
        <Typography type="h6">授課領域</Typography>
        <Typography className="mt-1 text-foreground">
          工程數學、電磁學、分子生物工程
        </Typography>
        <Typography type="h6">研究專長</Typography>
        <Typography className="mt-1 text-foreground">
          超材料與電漿子學；奈米元件及其應用；生醫感測；微奈米機電系統
        </Typography>
      </Card.Body>
    </Card>
  );
}

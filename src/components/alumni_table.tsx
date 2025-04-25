import * as React from "react";
import { EditPencil, UserPlus, Search } from "iconoir-react";
import {
  Input,
  Typography,
  Button,
  Chip,
  Tabs,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";

const TABLE_HEAD = ["Alumni", "Recent Development", "Research Interests"];

const TABLE_ROWS = [
  {
    name: "Chia-Yun Chen",
    email: "timcychen@mail.ncku.edu.tw",
    degree: "Ph.D.",
    org: "NCKU",
    interest:
      " Functional nanomaterials and devices, Solar cells, Optical sensing, Metamaterials, Photocatalytic materials, Semiconductor processing",
  },
  {
    name: "Chia-Yun Chen",
    email: "timcychen@mail.ncku.edu.tw",
    degree: "Ph.D.",
    org: "NCKU",
    interest:
      " Functional nanomaterials and devices, Solar cells, Optical sensing, Metamaterials, Photocatalytic materials, Semiconductor processing",
  },
  {
    name: "Chia-Yun Chen",
    email: "timcychen@mail.ncku.edu.tw",
    degree: "Ph.D.",
    org: "NCKU",
    interest:
      " Functional nanomaterials and devices, Solar cells, Optical sensing, Metamaterials, Photocatalytic materials, Semiconductor processing",
  },
  {
    name: "Chia-Yun Chen",
    email: "timcychen@mail.ncku.edu.tw",
    degree: "Ph.D.",
    org: "NCKU",
    interest:
      " Functional nanomaterials and devices, Solar cells, Optical sensing, Metamaterials, Photocatalytic materials, Semiconductor processing",
  },
  {
    name: "Chia-Yun Chen",
    email: "timcychen@mail.ncku.edu.tw",
    degree: "Ph.D.",
    org: "NCKU",
    interest:
      " Functional nanomaterials and devices, Solar cells, Optical sensing, Metamaterials, Photocatalytic materials, Semiconductor processing",
  },
  {
    name: "Chia-Yun Chen",
    email: "timcychen@mail.ncku.edu.tw",
    degree: "Ph.D.",
    org: "NCKU",
    interest:
      " Functional nanomaterials and devices, Solar cells, Optical sensing, Metamaterials, Photocatalytic materials, Semiconductor processing",
  },
];

export default function MembersTable() {
  return (
    <div className="w-full ">
      <div className="mb-8 flex items-center justify-between gap-8">
        <div>
          <Typography type="h6">畢業學長姐資訊及出路</Typography>
          <Typography className="mt-1">自???學年度開始統計</Typography>
        </div>
      </div>

      <div className="mt-4 w-full overflow-hidden rounded-lg border border-surface">
        <table className="w-full">
          <thead className="border-b border-surface bg-surface-light text-sm font-medium text-foreground dark:bg-surface-dark">
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="px-2.5 py-2 text-start font-medium">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="group text-sm text-black dark:text-white">
            {TABLE_ROWS.map(({ name, email, degree, org, interest }, index) => {
              return (
                <tr
                  key={name}
                  className="border-b border-surface last:border-0"
                >
                  <td className="p-2">
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <Typography type="small">{name}</Typography>
                        <Typography type="small" className="opacity-70">
                          {email}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="flex flex-col">
                      <Typography type="small">{degree}</Typography>
                      <Typography type="small" className="opacity-70">
                        {org}
                      </Typography>
                    </div>
                  </td>

                  <td className="p-2">
                    <Typography type="small">{interest}</Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between border-t border-surface-light py-4">
        <Typography type="small">Page 1 of 10</Typography>
        <div className="flex gap-2">
          <Button variant="outline" color="secondary" size="sm">
            Previous
          </Button>
          <Button variant="outline" color="secondary" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

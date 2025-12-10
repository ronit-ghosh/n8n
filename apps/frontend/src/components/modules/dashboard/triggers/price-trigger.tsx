import { memo } from "react";
import { Handle, Position } from "@xyflow/react";

const PriceTrigger = ({
  // data,
  isConnectable,
}: {
  data?: string;
  isConnectable: boolean;
}) => {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/price-trigger.png"
        alt="logo"
        width={100}
        height={100}
        className="size-16 object-cover"
      />
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
      />
    </>
  );
};

export default memo(PriceTrigger);

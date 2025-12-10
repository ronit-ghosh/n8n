import { memo } from "react";
import { Handle, Position } from "@xyflow/react";

const BackpackNode = ({
  // data,
  isConnectable,
}: {
  data?: string;
  isConnectable: boolean;
}) => {
  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/backpack.png"
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

export default memo(BackpackNode);

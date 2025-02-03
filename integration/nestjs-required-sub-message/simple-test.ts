import { Message } from "./simple";

type RequiredUndefined<T> = {
  [K in keyof Required<T>]: T[K];
};

describe("Simple", () => {
  it("type checking works correctly for interfaces", () => {
    const message: RequiredUndefined<Message> = {
      int32: 1,
      requiredSubMessage: {
        int32: 1,
        optionalInt32: undefined,
      },
      requiredTimestamp: { nanos: 0, seconds: 0 },
      optionalInt32: undefined,
      optionalSubMessage: undefined,
      optionalTimestamp: undefined,
    };
  });
});

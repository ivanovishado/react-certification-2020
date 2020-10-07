import { storage } from "../storage";

describe("Storage", () => {
  it("Gets null from storage", async () => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(() => 2),
      },
    });
    const res = storage.get("somekey");
    expect(res).toBeNull();
  });

  it("Get throws error", async () => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(() => {
          throw new Error("some error");
        }),
      },
    });
    const res = storage.get("somekey");
    expect(res).toBeNull();
  });
});

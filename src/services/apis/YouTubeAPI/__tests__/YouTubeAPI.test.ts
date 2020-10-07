import API from "../YouTubeAPI";
import { SearchTypes } from "../constants";

describe("Query search", () => {
  it("Sends query to api", async () => {
    const result = await API.get(SearchTypes.QUERY_TYPE_SEARCH, "someResource");

    expect(result).toBeInstanceOf(Object);
  });
});

describe("Related search", () => {
  it("Sends related videos search to api", async () => {
    const result = await API.get(
      SearchTypes.RELATED_TYPE_SEARCH,
      "someResource"
    );

    expect(result).toBeInstanceOf(Object);
  });
});

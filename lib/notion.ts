const API_ENDPOINT = `https://api.notion.com/v1`;
const NOTION_TOKEN = process.env.NOTION_TOKEN;

export const getListDB = async (databaseId: string) => {
  const url = `${API_ENDPOINT}/databases/${databaseId}/query`;
  const res = await fetch(url, {
    method: "POST",
    headers: new Headers({
      Authorization: "Bearer " + NOTION_TOKEN,
      "Notion-Version": "2021-08-16",
    }),
  });

  if (res.ok) {
    return res.json();
  } else {
    throw new Error(`Notion API error ${url} (${res.status})`);
  }
};

export const getDB = async (databaseId: string) => {
  const url = `${API_ENDPOINT}/pages/${databaseId}`;
  const res = await fetch(url, {
    method: "GET",
    headers: new Headers({
      Authorization: "Bearer " + NOTION_TOKEN,
      "Notion-Version": "2021-08-16",
    }),
  });

  if (res.ok) {
    return res.json();
  } else {
    return null;
    // @todo: error when GET pages
    throw new Error(`Notion API error ${url} (${res.status})`);
  }
};

export const getNow = async () => {
  const [listDB, dataDB] = await Promise.all([
    getListDB("c0c15e3c2bd544758d97f261ea39d383"),
    getDB("58d9fd7322cd46e6abbe97f2cd8f0053"),
  ]);

  const entries = listDB.results.map((result: any) => {
    return result.properties?.entry.title
      .map((text: any) => text.plain_text)
      .join("");
  });

  const lastUpdated = Math.max(
    ...listDB.results.map((result: any) => {
      return new Date(result.last_edited_time);
    })
  );

  return {
    entries,
    lastUpdated,
    coverUrl: dataDB?.cover?.file?.url || null,
    dataDB,
    listDB,
  };
};

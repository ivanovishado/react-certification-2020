const storage = {
  get(key: string) {
    try {
      const rawValue = window.localStorage.getItem(key);

      if (typeof rawValue === "string") {
        return JSON.parse(rawValue);
      }
    } catch (error) {
      console.error(`Error parsing storage item "${key}".`);
    } finally {
      return null;
    }
  },

  set(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value));
  },
};

export { storage };

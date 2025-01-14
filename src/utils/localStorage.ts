export const getItem = <T>(key: string): T | null => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Error getting item from localStorage: ${key}`, error);
      return null;
    }
  };
  
  export const setItem = <T>(key: string, value: T): void => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting item in localStorage: ${key}`, error);
    }
  };
  
  export const removeItem = (key: string): void => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing item from localStorage: ${key}`, error);
    }
  };
  
  export const getTimestamp = (key: string): number | null => {
    try {
      const timestamp = localStorage.getItem(`${key}-timestamp`);
      return timestamp ? parseInt(timestamp, 10) : null;
    } catch (error) {
      console.error(`Error getting timestamp from localStorage: ${key}`, error);
      return null;
    }
  };
  
  export const setTimestamp = (key: string, timestamp: number): void => {
    try {
      localStorage.setItem(`${key}-timestamp`, timestamp.toString());
    } catch (error) {
      console.error(`Error setting timestamp in localStorage: ${key}`, error);
    }
  };
  
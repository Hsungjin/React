import { useEffect, useState } from "react";
import { Wedding } from "../models/wedding";
import { getWedding } from "../api/wedding";

export function useWedding() {
  const [wedding, setWedding] = useState<Wedding | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getWedding()
      .then((res) => {
        if (!res.ok) {
          throw new Error("청첩장 정보를 불러오지 못했습니다.");
        }
        return res.json();
      })
      .then((data) => {
        setWedding(data);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { wedding, isLoading, error };
}

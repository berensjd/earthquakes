import { useState, useEffect } from "react";
import { getEarthquakes } from "../feeds/earthquakeQuery";
import dateTime from "date-time";
import extractEarthquakeData from "../dataProcessing/extractEarthquakeData";
import { toast } from "react-toastify";

export default function useFetchEarthquakeData([starttime, endtime]) {
  const queryString = `starttime=${starttime}&endtime=${endtime}`;

  const [earthquakedata, setEarthquakedata] = useState([]);
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [magList, setMagList] = useState([]);
  const [magTypeList, setMagTypeList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      console.log(
        `Fetching earthquake data from server using query string: ${queryString}`
      );
      let result;
      try {
        result = await getEarthquakes(queryString);
      } catch (e) {
        toast.error(e.response.data);
        return;
      }

      const { features: data, metadata } = result.data;

      const {
        extractedEarthquakeData,
        magList,
        magTypeList
      } = extractEarthquakeData(data);

      setEarthquakedata(extractedEarthquakeData);
      setMagList(magList);
      setMagTypeList(magTypeList);
      setCount(metadata.count);
      setTitle(
        `${metadata.title} - Report generated as at ${dateTime({
          date: new Date(metadata.generated),
          local: true,
          showTimeZone: true
        })}`
      );
      setLoading(false);
    }

    fetchData();
  }, [starttime, endtime, queryString]);

  return { earthquakedata, count, loading, title, magList, magTypeList };
}

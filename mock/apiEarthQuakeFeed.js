const records = [
  {
    type: "Feature",
    properties: {
      mag: 1.29,
      place: "10km SSW of Idyllwild, CA",
      time: 1388620296020,
      updated: 1457728844428,
      tz: -480,
      url: "https://earthquake.usgs.gov/earthquakes/eventpage/ci11408890",
      detail:
        "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ci11408890&format=geojson",
      felt: null,
      cdi: null,
      mmi: null,
      alert: null,
      status: "reviewed",
      tsunami: 0,
      sig: 26,
      net: "ci",
      code: "11408890",
      ids: ",ci11408890,",
      sources: ",ci,",
      types:
        ",cap,focal-mechanism,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
      nst: 39,
      dmin: 0.06729,
      rms: 0.09,
      gap: 51,
      magType: "ml",
      type: "earthquake",
      title: "M 1.3 - 10km SSW of Idyllwild, CA"
    },
    geometry: {
      type: "Point",
      coordinates: [-116.7776667, 33.6633333, 11.008]
    },
    id: "ci11408890"
  },
  {
    type: "Feature",
    properties: {
      mag: 1.1,
      place: "117km NW of Talkeetna, Alaska",
      time: 1388620046000,
      updated: 1389117322816,
      tz: -540,
      url: "https://earthquake.usgs.gov/earthquakes/eventpage/ak10992887",
      detail:
        "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ak10992887&format=geojson",
      felt: null,
      cdi: null,
      mmi: null,
      alert: null,
      status: "reviewed",
      tsunami: 0,
      sig: 19,
      net: "ak",
      code: "10992887",
      ids: ",ak10992887,",
      sources: ",ak,",
      types:
        ",general-link,general-link,geoserve,nearby-cities,origin,tectonic-summary,",
      nst: null,
      dmin: null,
      rms: 0.57,
      gap: null,
      magType: "ml",
      type: "earthquake",
      title: "M 1.1 - 117km NW of Talkeetna, Alaska"
    },
    geometry: { type: "Point", coordinates: [-151.6458, 63.102, 14.1] },
    id: "ak10992887"
  },
  {
    type: "Feature",
    properties: {
      mag: 1.3,
      place: "6km SSW of Big Lake, Alaska",
      time: 1388619956000,
      updated: 1388629238196,
      tz: -540,
      url: "https://earthquake.usgs.gov/earthquakes/eventpage/ak10934318",
      detail:
        "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ak10934318&format=geojson",
      felt: null,
      cdi: null,
      mmi: null,
      alert: null,
      status: "reviewed",
      tsunami: 0,
      sig: 26,
      net: "ak",
      code: "10934318",
      ids: ",ak10934318,",
      sources: ",ak,",
      types:
        ",cap,general-link,general-link,geoserve,nearby-cities,origin,tectonic-summary,",
      nst: null,
      dmin: null,
      rms: 0.65,
      gap: null,
      magType: "ml",
      type: "earthquake",
      title: "M 1.3 - 6km SSW of Big Lake, Alaska"
    },
    geometry: { type: "Point", coordinates: [-149.9849, 61.4624, 46.7] },
    id: "ak10934318"
  },
  {
    type: "Feature",
    properties: {
      mag: 1.4,
      place: "63km NW of Talkeetna, Alaska",
      time: 1388619763000,
      updated: 1389117316113,
      tz: -540,
      url: "https://earthquake.usgs.gov/earthquakes/eventpage/ak10992885",
      detail:
        "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ak10992885&format=geojson",
      felt: null,
      cdi: null,
      mmi: null,
      alert: null,
      status: "reviewed",
      tsunami: 0,
      sig: 30,
      net: "ak",
      code: "10992885",
      ids: ",ak10992885,",
      sources: ",ak,",
      types:
        ",general-link,general-link,geoserve,nearby-cities,origin,tectonic-summary,",
      nst: null,
      dmin: null,
      rms: 0.35,
      gap: null,
      magType: "ml",
      type: "earthquake",
      title: "M 1.4 - 63km NW of Talkeetna, Alaska"
    },
    geometry: { type: "Point", coordinates: [-150.8275, 62.7884, 87.6] },
    id: "ak10992885"
  },
  {
    type: "Feature",
    properties: {
      mag: 4,
      place: "27km WNW of Coquimbo, Chile",
      time: 1388619735000,
      updated: 1394151954000,
      tz: -300,
      url: "https://earthquake.usgs.gov/earthquakes/eventpage/usc000mnnn",
      detail:
        "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=usc000mnnn&format=geojson",
      felt: null,
      cdi: null,
      mmi: null,
      alert: null,
      status: "reviewed",
      tsunami: 0,
      sig: 246,
      net: "us",
      code: "c000mnnn",
      ids: ",usc000mnnn,",
      sources: ",us,",
      types:
        ",general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
      nst: null,
      dmin: null,
      rms: 3.09,
      gap: null,
      magType: "ml",
      type: "earthquake",
      title: "M 4.0 - 27km WNW of Coquimbo, Chile"
    },
    geometry: { type: "Point", coordinates: [-71.621, -29.888, 40] },
    id: "usc000mnnn"
  },
  {
    type: "Feature",
    properties: {
      mag: 0.53,
      place: "4km NW of The Geysers, California",
      time: 1388619644020,
      updated: 1486063047447,
      tz: -480,
      url: "https://earthquake.usgs.gov/earthquakes/eventpage/nc72134466",
      detail:
        "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc72134466&format=geojson",
      felt: null,
      cdi: null,
      mmi: null,
      alert: null,
      status: "automatic",
      tsunami: 0,
      sig: 4,
      net: "nc",
      code: "72134466",
      ids: ",nc72134466,",
      sources: ",nc,",
      types: ",geoserve,nearby-cities,origin,phase-data,scitech-link,",
      nst: 8,
      dmin: 0.007207,
      rms: 0.03,
      gap: 90,
      magType: "md",
      type: "earthquake",
      title: "M 0.5 - 4km NW of The Geysers, California"
    },
    geometry: { type: "Point", coordinates: [-122.7839966, 38.8071671, 0.013] },
    id: "nc72134466"
  }
];

export default records;

export const recordCount = records.length;

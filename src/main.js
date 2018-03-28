import data from '../static/data.json'

class Baggage {
  constructor(weight, length, width, height) {
    this.weight = weight;
    this.length = length;
    this.width = width;
    this.height = height;
    this.size=this.width + this.length + this.height;
  }
}

class Flight {
  constructor(start, end, flightType, travelerType) {
    this.start = start;
    this.end = end;
    this.flightType = Flight.FlightType[flightType];
    this.travelerType = Flight.TravelerType[travelerType]
  }
}
Flight.TravelerType = {
  头等舱: 0,
  公务舱: 1,
  经济舱: 2,
  明珠经济舱: 3,
  不占座婴儿: 4
};
Flight.FlightType = {
  国内航班: 0,
  区域一: 1,
  区域二_涉及美国: 2,
  区域二_不涉及美国: 3,
  区域三: 4,
  区域四: 5,
  区域五: 6,
};


function getFreeBaggage(start, end, flightType, travelerType) {
  let flight = new Flight(start, end, flightType, travelerType)
  console.log(flight)
  let result = {}
  switch (flight.travelerType) {
    case Flight.TravelerType.头等舱:
      switch (flight.flightType) {
        case Flight.FlightType.国内航班:
          result = {
            maxWeight: 40,
            number: 1,
            maxLength: 60,
            maxWidth: 40,
            maxHeight: 100
          }
          break;
        default:
          result = {
            maxWeight: 32,
            maxSize: 158,
            number: 3,
          }
          break;
      }
      break;
    case Flight.TravelerType.公务舱:
      switch (flight.flightType) {
        case Flight.FlightType.国内航班:
          result = {
            maxWeight: 30,
            number: 1,
            maxLength: 60,
            maxWidth: 40,
            maxHeight: 100
          }
          break;
        case Flight.FlightType.区域四:
          result = {
            maxWeight: 23,
            number: 3,
            maxSize: 158
          }
          break;
        default:
          result = {
            maxWeight: 32,
            number: 2,
            maxSize: 158
          }
          break;
      }
      break;
    case Flight.TravelerType.明珠经济舱:
      if (flight.flightType === Flight.FlightType.区域四) {
        result = {
          maxWeight: 23,
          number: 2,
          maxSize: 158
        }
        break;
      }
    case Flight.TravelerType.经济舱:
      switch (flight.flightType) {
        case Flight.FlightType.国内航班:
          result = {
            maxWeight: 20,
            number: 1,
            maxLength: 60,
            maxWidth: 40,
            maxHeight: 100
          }
          break;
        case Flight.FlightType.区域二_不涉及美国:
        case Flight.FlightType.区域二_涉及美国:
          result = {
            maxWeight: 32,
            number: 1,
            maxSize: 158
          }
          break;
        case Flight.FlightType.区域四:
        case Flight.FlightType.区域五:
          result = {
            maxWeight: 23,
            number: 1,
            maxSize: 158,
          }
          break;
        default:
          result = {
            maxWeight: 23,
            number: 2,
            maxSize: 158
          }
          break;
      }
      break;
    case Flight.TravelerType.不占座婴儿:
      switch (flight.flightType) {
        case Flight.FlightType.国内航班:
          result = {
            maxWeight: 10,
            number: 1,
            maxLength: 60,
            maxWidth: 40,
            maxHeight: 100
          }
          break;
        default:
          result = {
            maxWeight: 10,
            number: 1,
            maxSize: 115
          }
          break;
      }
      break;
  }
  return result
}

function canITake(start, end, flightType, travelerType, weight, length, width, height) {
  let flight = new Flight(start, end, flightType, travelerType);
  let baggage = new Baggage(weight, length, width, height);
  switch (flight.flightType) {
    case Flight.FlightType.国内航班:
      return baggage.width <= 40
        && baggage.height <= 100
        && baggage.length <= 60
        && baggage.weight <= 50
    case Flight.FlightType.区域二_涉及美国:
      return baggage.size <= 158
        && baggage.weight <= 45;
    default:
      return baggage.size <= 158
        && baggage.weight <= 32;
  }
}

function howMuch(flight,freeBaggage, myBaggages) {
  myBaggages.sort((a,b)=>a.weight>b.weight)
  console.(myBaggages)
  let result = {}
  for (let baggage in myBaggages) {
    if(!canITake(flight,baggage)){
      // 你的行李不能被带上飞机哦
      return -1;
    }
  }
}
export {
  getFreeBaggage,
  Flight,
  Baggage,
  canITake
};

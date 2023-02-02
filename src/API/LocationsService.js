import axios from "axios";

export default class LocationsService {
  static async getAll() {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/location`
    );
    return response;
  }
}

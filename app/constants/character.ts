import { Character } from "@/server/dependences/amTesting-master";
const TYPE_EMPTY = {
  name: "",
  url: "",
};
export const CHARACTER_EMPTY: Character = {
  id: 0,
  created: "",
  episode: [],
  gender: "unknown",
  image: "",
  location: TYPE_EMPTY,
  name: "",
  origin: TYPE_EMPTY,
  species: "",
  status: "unknown",
  type: "",
  url: "",
};
export const IMAGE =
  "https://media.istockphoto.com/id/1222357475/vector/image-preview-icon-picture-placeholder-for-website-or-ui-ux-design-vector-illustration.jpg?s=612x612&w=0&k=20&c=KuCo-dRBYV7nz2gbk4J9w1WtTAgpTdznHu55W9FjimE=";
export const enum NO_DATA_CHARACTER_ENUM {
  name = "No name",
  type = "No type",
  location = "No data",
  gender = "No data",
  origin = "No data",
}

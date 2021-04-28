import types from "./types";

export const onSave = (payload) => ({
  type: types.SAVE,
  payload,
});

export const onDelete = (payload) => ({
  type: types.DELETE,
  payload,
});

export const onUpdate = (payload) => ({
  type: types.UPDATE_FILTER,
  payload,
});

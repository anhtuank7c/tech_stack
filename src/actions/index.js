// return action selectLibrary with type and ship a payload
export const selectLibrary = (libraryId) => ({
  type: 'select_library',
  payload: libraryId
});

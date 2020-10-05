export const fetchUser = value => ({
  type: 'FETCH_USER',
  payload: value
});


export const fetchRepos = data => ({
  type: 'FETCH_REPOS',
  payload: data
});


export const loader = value => ({
  type: 'LOADER',
  payload: value
});

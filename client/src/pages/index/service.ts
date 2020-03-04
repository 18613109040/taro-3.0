import Request from '../../utils/request';

export const nuclearName = data =>
  Request({
    url: "/api/hm/HeMingAsync",
    method: 'POST',
    data,
  });
export const sortSectionsAsc = (newLeaveObj1, newLeaveObj2) => {
  if (
    newLeaveObj1.unformatted_to_date.getTime() >
    newLeaveObj2.unformatted_to_date.getTime()
  )
    return 1;
  else if (
    newLeaveObj1.unformatted_to_date.getTime() <
    newLeaveObj2.unformatted_to_date.getTime()
  )
    return -1;
  else return 0;
};

export const sortSectionsDes = (newLeaveObj1, newLeaveObj2) => {
  if (
    newLeaveObj1.unformatted_to_date.getTime() >
    newLeaveObj2.unformatted_to_date.getTime()
  )
    return -1;
  else if (
    newLeaveObj1.unformatted_to_date.getTime() <
    newLeaveObj2.unformatted_to_date.getTime()
  )
    return 1;
  else return 0;
};

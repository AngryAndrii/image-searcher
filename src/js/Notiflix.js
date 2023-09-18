import Notiflix from 'notiflix';

const NotiflixObj = {
  incorrectRequest() {
    Notiflix.Notify.warning(
      'incorrect request, please check the correctness of the input'
    );
  },
  voidField() {
    Notiflix.Notify.warning('please enter your query in the search bar');
  },
};

export { NotiflixObj };

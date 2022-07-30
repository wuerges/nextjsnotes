import { Note } from "../../components/note";

import { useRouter } from "next/router";

const NotePage = () => {
  const router = useRouter();
  console.log({ query: router.query });
  const id = router.query.id || "0";
  return (
    <>
      <p> This is a note page! </p>
      <Note id={+id} />
    </>
  );
};

export default NotePage;

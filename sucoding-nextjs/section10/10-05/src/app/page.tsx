import { nanum, rubikStorm } from "@/libs/font";

export default function Page() {
  return (
    <>
      <h1 className="rubik">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error tempora
        aliquid porro tempore! Numquam unde praesentium cumque impedit ipsa!
        Reprehenderit esse quam omnis quaerat consequuntur corporis eum
        temporibus id. Nobis.
      </h1>
      <h1 className={rubikStorm.className}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error tempora
        aliquid porro tempore! Numquam unde praesentium cumque impedit ipsa!
        Reprehenderit esse quam omnis quaerat consequuntur corporis eum
        temporibus id. Nobis.
      </h1>
      <h1 className={nanum.className}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error tempora
        aliquid porro tempore! Numquam unde praesentium cumque impedit ipsa!
        Reprehenderit esse quam omnis quaerat consequuntur corporis eum
        temporibus id. Nobis.
      </h1>
    </>
  );
}

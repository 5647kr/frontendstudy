import Modal from "@/components/ui/Modal";
import { PosterModalSkeleton } from "@/components/ui/Skeletons";

export default async function Loading() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <>
      <Modal>
        <PosterModalSkeleton />
      </Modal>
    </>
  );
}

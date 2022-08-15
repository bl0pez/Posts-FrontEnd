import { Modal } from "../../components";
import { NewPost, PostsList } from "../components";

export const Posts = () => {

  return (
    <div className="container mx-auto">
      <section className="py-4 text-center">
        <form className="gap-2">
          <input
            type="text"
            placeholder="Your status"
            control="input"
            className="border w-96 border-gray-400 focus:border-violet-900 focus:outline-none focus:shadow-outline p-2 rounded-lg"
          />
          <button className="text-violet-900 p-3 text-xl">Update</button>
        </form>
      </section>
      <section className="text-center mb-4">
        <NewPost />
      </section>
      <PostsList />
      <Modal />
    </div>
  );
};

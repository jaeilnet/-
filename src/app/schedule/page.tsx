import Input from "@/components/elements/input";
import styles from "./schedule.module.scss";

const SchedulePage = () => {
  return (
    <section className={styles.schedule}>
      <form>
        <Input label="제목" />
        <label>시간대</label>
        <input />
        <label>장소</label>
        <input />
        <label>반복</label>
        <input />
        <label>알림</label>
        <input />
        <label>설명</label>
        <input />
      </form>
    </section>
  );
};

export default SchedulePage;

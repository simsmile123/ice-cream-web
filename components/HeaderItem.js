import styles from "./HeaderItem.module.css";

function HeaderItem({ title }) {
  return (
    <div>
      <h3 className="text-[#D69656] tracking-wide" id={styles.coollook}>
        {title}
      </h3>
    </div>
  );
}

export default HeaderItem;

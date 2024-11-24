import s from './Options.module.css';

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div className={s.btnBox}>
      <button className={s.commentBtn} onClick={() => updateFeedback('good')}>
        Good
      </button>
      <button
        className={s.commentBtn}
        onClick={() => updateFeedback('neutral')}
      >
        Neutral
      </button>
      <button className={s.commentBtn} onClick={() => updateFeedback('bad')}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={s.commentBtn} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};
export default Options;
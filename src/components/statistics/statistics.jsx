import PropTypes from "prop-types";
import StatisticsItem from './statisticsItem';
import s from './statistic.module.css'


function Statistics({ stats, title }) {

  return (<section className={s.statistics}>
     {title && <h2 className={s.title}>{title}</h2>}
     

     <ul className={s.statList}>
       {stats.map(stat => (
         <StatisticsItem
         key={stat.id}
         label= {stat.label}
         percentage = {stat.percentage}
       />))}
   
  </ul>
</section> )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};


export default Statistics;

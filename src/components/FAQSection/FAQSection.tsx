import FAQItem from '../FAQItem/FAQItem';
import styles from './FAQSection.module.scss';

const faqText = [
  {
    id: 'accordion-1',
    title: 'Колико кошта ваша услуга чишћења зграда?',
    content:
      'Цена варира у зависности од величине објекта и опсега услуге. Наш циљ је пружити најбољи однос цене и квалитета, те ћемо вам пружити детаљну понуду након бесплатне процене.',
  },
  {
    id: 'accordion-2',
    title: 'Које врсте чишћења нуде ваша агенција?',
    content:
      'Наша агенција пружа услуге редовног одржавања зграда и специјализоване услуге попут чишћења након грађевинских радова.',
  },
  {
    id: 'accordion-3',
    title: 'Како бирате и обучавате своје особље за чишћење?',
    content:
      'Сви наши запослени пролазе ригорозан процес селекције и обуке. Имамо високе стандарде за професионалност и ефикасност.',
  },
  {
    id: 'accordion-4',
    title: 'Како се планира распоред чишћења и колико често долазите?',
    content:
      'Распоред чишћења се прилагођава потребама сваког клијента. Можемо пружити услуге дневно, недељно, месечно или према договору.  Наша екипа ће с вама договорити фреквенцију чишћења и најпогодније време доласка како бисмо се прилагодили вашем радном распореду и преференцијама.',
  },
  {
    id: 'accordion-5',
    title: 'Да ли нудите могућност прилагођавања услуге према специфичним потребама клијената?',
    content:
      'Да, свака услуга се прилагођава специфичним захтевима клијената. Спремни смо да удовољимо посебним захтевима како бисмо испунили очекивања сваког клијента.',
  },
  {
    id: 'accordion-6',
    title: 'Који хемијски средства и опрему користите за чишћење?',
    content:
      'Користимо еколошки прихватљиве детерџенте и висококвалитетну опрему како бисмо постигли изванредне резултате чишћења уз минималан утицај на околину.',
  },
  {
    id: 'accordion-7',
    title: 'Како гарантујете квалитет и безбедност ваших услуга чишћења зграда?',
    content:
      'Наша агенција се поноси високим стандардима квалитета и безбедности. Сви наши радници су обучени за правилно руковање опремом и хемијским средствима. Такође, редовно вршимо интерну проверу квалитета и примењујемо најновије технике како бисмо осигурали доследност и задовољство клијената. Наша посвећеност квалитету и безбедности је од суштинског значаја за нас.',
  },
];

function FAQSection() {
  return (
    <section id='faq'>
      <h1>Најчешћа питања корисника</h1>
      <div className={styles.accordionsWrapper}>
        {faqText.map((item) => (
          <FAQItem key={item.id} title={item.title} content={item.content} />
        ))}
      </div>
    </section>
  );
}

export default FAQSection;

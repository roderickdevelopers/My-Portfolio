export default function(){

  this.transition(
    this.use('toDown'),
    this.reverse('toDown')
        
    
  );
  // Add your transitions here, like:
  //   this.transition(
  //     this.fromRoute('people.index'),
  //     this.toRoute('people.detail'),
  //     this.use('toLeft'),
  //     this.reverse('toRight')
  //   );
}

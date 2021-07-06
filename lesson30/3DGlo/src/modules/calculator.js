const calculator = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
        calcType = document.querySelector('.calc-type'),
        calcSquare = document.querySelector('.calc-square'),
        calcCount = document.querySelector('.calc-count'),
        calcDay = document.querySelector('.calc-day'),
        totalValue = document.getElementById('total');
    
    const countSum = () => {
        let total = 0;
        let countValue = 1,
            dayValue = 1;
        
        const animateValue = (obj, start, end, duration) => {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                obj.innerHTML = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        };
              
        

        const typeValue = calcType.options[calcType.selectedIndex].value/10;
        
        
        const squareValue = +calcSquare.value;
        if (calcCount.value > 1) {
            countValue += (calcCount.value - 1)/ 10;
        }

        /**
         * срочность < 5 дней - двойной тариф
         * срочность от 5 до 10 дней - полуторный тариф
         * срочность выше 10 дней - обычный тариф
        */
        if (calcDay.value && calcDay.value < 5){
            dayValue *= 2;
        } else if (calcDay.value && calcDay.value < 10) {
            dayValue *= 1.5;
        }

        if(typeValue && squareValue) {
            total = price * typeValue * squareValue * countValue * dayValue;
        } else {
            total = 0;
        }

        
        animateValue(totalValue, 0, total, 500);
        
    };

    calcBlock.addEventListener('change', (event) => {
        const target = event.target;
        
            
        if (target.matches('select') || target.matches('input')){
            countSum();
        }
        });

};

export default calculator;
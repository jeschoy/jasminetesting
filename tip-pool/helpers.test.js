describe('Utilities test (with setup and tear-down)', () => {
  beforeEach(function () {
    billAmtInput.value = 100;
    tipAmtInput.value = 40;
    submitPaymentInfo();
  });

  it('should sum total tip amount of all payments on sumPaymentTotal()', () => {
    expect(sumPaymentTotal('tipAmt')).toEqual(40);

    billAmtInput.value = 400;
    tipAmtInput.value = 80;

    submitPaymentInfo();

    expect(sumPaymentTotal('tipAmt')).toEqual(120);
  });

  it('should sum total bill amount of all payments on sumPaymentTotal()', () => {
    expect(sumPaymentTotal('billAmt')).toEqual(100);

    billAmtInput.value = 200;
    tipAmtInput.value = 40;

    submitPaymentInfo();

    expect(sumPaymentTotal('billAmt')).toEqual(300);
  });

  it('should sum total tip percent on sumPaymentTotal()', () => {
    expect(sumPaymentTotal('tipPercent')).toEqual(40);

    billAmtInput.value = 200;
    tipAmtInput.value = 40;

    submitPaymentInfo();

    expect(sumPaymentTotal('tipPercent')).toEqual(60);
  });

  it('should sum tip percent of a single tip on calculateTipPercent()', () => {
    expect(calculateTipPercent(100, 21)).toEqual(21);
    expect(calculateTipPercent(100, 10)).toEqual(10);
  });

  it('should generate new td from value and append to tr on appendTd(tr, value)', () => {
    let newTr = document.createElement('tr');

    appendTd(newTr, 'test');

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual('test');
  });

  it('should generate delete td and append to tr on appendDeleteBtn(tr, type)', () => {
    let newTr = document.createElement('tr');

    appendDeleteBtn(newTr);

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual('X');
  });

  afterEach(() => {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    allPayments = {};
    paymentId = 0;
  });
});

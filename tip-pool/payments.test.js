describe('Payments test (with setup and tear-down)', () => {
  beforeEach(function () {
    billAmtInput.value = 200;
    tipAmtInput.value = 40;
  });

  it('should add a new payment to allPayments on submitPaymentInfo()', () => {
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments['payment1'].billAmt).toEqual('200');
    expect(allPayments['payment1'].tipAmt).toEqual('40');
    expect(allPayments['payment1'].tipPercent).toEqual(20);
  });

  it('should not add a new payment on submitPaymentInfo() with empty input', () => {
    billAmtInput.value = '';
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(0);
  });

  it('should payment update #paymentTable on appendPaymentTable()', () => {
    let curPayment = createCurPayment();
    allPayments['payment1'] = curPayment;

    appendPaymentTable(curPayment);

    let currentList = document.querySelectorAll('#paymentTable tbody tr td');

    expect(currentList.length).toEqual(3);
    expect(currentList[0].innerText).toEqual('$200');
    expect(currentList[1].innerText).toEqual('$40');
    expect(currentList[2].innerText).toEqual('20%');
  });

  it('should create a new payment on createCurPayment()', () => {
    let expectedPayment = {
      billAmt: '200',
      tipAmt: '40',
      tipPercent: 20,
    };

    expect(createCurPayment()).toEqual(expectedPayment);
  });

  it('should not create payment with empty input on createCurPayment()', () => {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    let currentPayment = createCurPayment();

    expect(currentPayment).toEqual(undefined);
  });

  afterEach(() => {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    paymentId = 0;
    allPayments = {};
  });
});

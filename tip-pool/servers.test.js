describe('Servers test (with setup and tear-down)', () => {
  beforeEach(() => {
    serverNameInput.value = 'Tina';
  });

  it('should add a new server to allServers on submitServerInfo()', () => {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Tina');
  });

  it('should update #servertable on updateServerTable()', function () {
    submitServerInfo();
    updateServerTable();

    let currentList = document.querySelectorAll('#serverTable tbody tr td');

    expect(currentList.length).toEqual(3);
    expect(currentList[0].innerText).toEqual('Tina');
    expect(currentList[1].innerText).toEqual('$0.00');
    expect(currentList[2].innerText).toEqual('X');
  });

  afterEach(() => {
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
});

import axios from '../../axios';

const fetchSectors = async (callBack: (data: any) => void, page: number, size: number) => {
  await axios.get(`/sectors/v1?page=${page}&size=${size}`).then((response) => {
    callBack(response.data.payload);
  });
};
const fetchPanelFormats = async (callBack: (data: any) => void, page: number, size: number) => {
  await axios.get(`/panel-formats/v1?page=${page}&size=${size}`).then((response) => {
    callBack(response.data.payload);
  });
};
const fetchSupports = async (callBack: (data: any) => void, page: number, size: number) => {
  await axios.get(`/supports/v1?page=${page}&size=${size}`).then((response) => {
    callBack(response.data.payload);
  });
};

const fetchSectorSearch = async (callBack: (data: any) => void, word: string, page: number, size: number) => {
  await axios.get(`/sectors/v1/filter-byname?sector=${word}&page=${page}&size=${size}`).then((response) => {
    callBack(response.data.payload);
  });
};

const fetchPanelFormatsSearch = async (callBack: (data: any) => void, word: string, page: number, size: number) => {
  await axios.get(`/panel-formats/v1/filter-byname?format=${word}&page=${page}&size=${size}`).then((response) => {
    callBack(response.data.payload);
  });
};

const fetchSupportSearch = async (callBack: (data: any) => void, word: string, page: number, size: number) => {
  await axios.get(`/supports/v1/filter-byname?name=${word}&page=${page}&size=${size}`).then((response) => {
    callBack(response.data.payload);
  });
};

const createSector = async (sector: string, callBack: () => void) => {
  await axios.post('/sectors/v1', { sector }).then(() => {
    alert('Secteur ajouté');
    callBack();
  });
};
const createPanelFormat = async (format: string, callBack: () => void) => {
  await axios.post('/panel-formats/v1', { format }).then(() => {
    alert('Format ajouté');
    callBack();
  });
};
const createSupport = async (name: string, callBack: () => void) => {
  await axios.post('/supports/v1', { name }).then(() => {
    alert('Support ajouté');
    callBack();
  });
};

const updateSector = async (sector: any) => {
  await axios.put(`/sectors/v1/${sector['id']}`, sector).then(() => {
    alert('Secteur modifié');
  });
};
const updatePanelFormat = async (panelFormat: any) => {
  await axios.put(`/panel-formats/v1/${panelFormat['id']}`, panelFormat).then(() => {
    alert('Format modifié');
  });
};
const updateSupport = async (support: any) => {
  await axios.put(`/supports/v1/${support['id']}`, support).then(() => {
    alert('Support modifié');
  });
};

const deleteSector = async (sector: any) => {
  await axios.delete(`/sectors/v1/${sector['id']}`).then(() => {
    alert('Secteur supprimé');
  });
};
const deletePanelFormat = async (panelFormat: any) => {
  await axios.delete(`/panel-formats/v1/${panelFormat['id']}`).then(() => {
    alert('Format supprimé');
  });
};
const deleteSupport = async (support: any) => {
  await axios.delete(`/supports/v1/${support['id']}`).then(() => {
    alert('Support supprimé');
  });
};

export const fetchAll = (index: number, callBack: (data: any) => void, page: number = 0, size: number = 10) => {
  switch (index) {
    case 1:
      fetchSectors(callBack, page, size);
      break;
    case 2:
      fetchPanelFormats(callBack, page, size);
      break;
    case 3:
      fetchSupports(callBack, page, size);
      break;
  }
};

export const search = (index: number, callBack: (data: any) => void, word: string, page: number = 0, size: number = 10) => {
  switch (index) {
    case 1:
      fetchSectorSearch(callBack,word, page, size);
      break;
    case 2:
      fetchPanelFormatsSearch(callBack,word, page, size);
      break;
    case 3:
      fetchSupportSearch(callBack,word, page, size);
      break;
  }
};

export const create = (index: number, value: string, callBack: () => void) => {
  switch (index) {
    case 1:
      createSector(value, callBack);
      break;
    case 2:
      createPanelFormat(value, callBack);
      break;
    case 3:
      createSupport(value, callBack);
      break;
  }
};

export const update = (index: number, object: any) => {
  switch (index) {
    case 1:
      updateSector(object);
      break;
    case 2:
      updatePanelFormat(object);
      break;
    case 3:
      updateSupport(object);
      break;
  }
};

export const suppress = (index: number, object: any) => {
  switch (index) {
    case 1:
      deleteSector(object);
      break;
    case 2:
      deletePanelFormat(object);
      break;
    case 3:
      deleteSupport(object);
      break;
  }
};

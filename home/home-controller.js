"use strict";

app.controller("HomeController", Controller);

function Controller(ModalService) {
  var vm = this;

  vm.openModal = openModal;
  vm.closeModal = closeModal;

  initController();

  function initController() {
    vm.bodyText = "This text can be updated in modal 1";
  }

  function openModal(id) {
    ModalService.Open(id);
    console.log('Open Modal');
  }

  function closeModal(id) {
    ModalService.Close(id);
    console.log('Close Modal');
  }
}

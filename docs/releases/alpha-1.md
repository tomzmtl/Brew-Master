# Release Alpha 1 scope and specs

## Facility phase 1

* Facility will contain 1 generic production equipment with 1 button.
* The production of beer will be done manually by clicking the button.
* The facility will contain a storage unit with fixed storage limit.
* Button will be disabled when the storage limit is reached.
* Producing beer will increase the amount of beer in storage up to the limit.
* Beer produced will be generic (basic properties).

## Update to the store

```
{
  facility : {
    storage: NUMBER
  }
}
```

## Constants

* `MAX_FACILITY_STORAGE` (number)

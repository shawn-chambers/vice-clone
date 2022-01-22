export interface MenuProps {
  menu: boolean
  displayMenu: (value: boolean | ((prevState: boolean) => boolean)) => void;
}

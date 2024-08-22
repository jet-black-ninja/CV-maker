


function InputEducationItem({ education, onSave, onRemove }) {
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("Key point");
    const [selectedSection, setSelectedSection] = useState(null);
  
    const onRemoveKeyPoint = (id) => {
      education.sections = education.sections.filter((section) => section.id !== id);
      onSave(education);
    };
  
    const onEditSection = (section) => {
      setModalTitle("Edit Key Point");
      setSelectedSection(section);
      setShowModal(true);
    }
  
    const handleAddNewKeyPoint = () => {
      const newSection = {
        id: uuidv4(),
        title: '',
        description: '',
        items: []
      };
  
      education.sections.push(newSection);
      onSave(education);
  
      setModalTitle("Add Key Point");
      setSelectedSection(newSection);
      setShowModal(true);
    }
  
    const handleOnSaveSection = (section) => {
      if (section.id) {
        const updatedSections = education.sections.map((item) => {
          if (item.id === section.id) {
            return section;
          }
          return item;
        });
  
        onSave({ ...education, sections: updatedSections });
        setShowModal(false);
      }
    };
  
    const onRemoveItem = (index) => {
      selectedSection.items = selectedSection.items.filter((_, i) => i !== index);
      setSelectedSection({ ...selectedSection });
    };
  
    const onAddItem = () => {
      if (!selectedSection.items)
        selectedSection.items = [];
  
      selectedSection.items.push('');
      setSelectedSection({ ...selectedSection });
    }
  
    const onChangeItem = (index, value) => {
      selectedSection.items[index] = value;
      setSelectedSection({ ...selectedSection });
    }

    return (

    )
}
export default InputEducationItem;
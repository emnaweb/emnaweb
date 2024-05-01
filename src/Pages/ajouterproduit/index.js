import React, { useState } from 'react';
import { Form, Input, Button, Select, Upload } from 'antd'; // Import des composants nécessaires depuis Ant Design
import { UploadOutlined } from '@ant-design/icons'; // Import de l'icône UploadOutlined
import "./index.css";
const { Option } = Select;

const AddProductPage = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    console.log('Form Values:', values);
    // Ici, vous pouvez envoyer les valeurs du formulaire vers votre backend pour les traiter
  };

  return (
  
      <div className="container">
        <div className="card">
        <div className="content">
          <h1>Ajouter un produit</h1>
          <input type="text" placeholder="title" className="textInputs" />
          <input type="text" placeholder="name" className="textInputs" />
          <input type="text" placeholder="description" className="textInputs" />
          <input type="text" placeholder="price" className="textInputs" />
          <input type="text" placeholder="brands" className="textInputs" />
          <input type="text" placeholder="quantité" className="textInputs" />
          <input type="text" placeholder="cupons" className="textInputs" />
          <input type="text" placeholder="disponibilité" className="textInputs" />
          <input type="text" placeholder="caractéristique" className="textInputs" />
          <input type="text" placeholder="catégorie" className="textInputs" />
        </div>
      </div>
      </div>
    );
  }
  

export default AddProductPage;
